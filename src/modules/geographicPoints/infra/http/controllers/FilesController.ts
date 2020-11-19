import { Request, Response } from 'express';

import ReadCSV from '@modules/geographicPoints/services/ReadCSV';

import CreateFile from '@modules/geographicPoints/services/CreateFile';

import CreateGeographicPoint from '@modules/geographicPoints/services/CreateGeographicPoint';

import File from '../../sequelize/models/File';

import GeographicPoint from '../../sequelize/models/GeographicPoint';

interface IStoreFile {
  url: string;
}

interface IStoreFileData {
  latitude: number;
  longitude: number;
}

export default class FilesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const files = await File.findAll({ order: [['updatedAt', 'DESC']] });

    return response.json(files);
  }

  public async store(
    request: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      IStoreFile
    >,
    response: Response,
  ): Promise<Response> {
    const { url } = request.body;

    const readCSV = new ReadCSV();

    const createFile = new CreateFile();

    const createGeographicPoint = new CreateGeographicPoint();

    const data = await readCSV.execute({ url });

    if (!data) {
      return response
        .status(400)
        .json({ error: 'Data not found in CSV file.' });
    }

    const file = await createFile.execute({ url });

    const geographicPoints: GeographicPoint[] = await Promise.all(
      data.map(async (row: IStoreFileData) => {
        const point = await createGeographicPoint.execute({
          fileId: file.id,
          point: {
            type: 'Point',
            coordinates: [row.latitude, row.longitude],
          },
        });
        return point;
      }),
    );

    return response.json({ file, geographicPoints });
  }
}
