import { Request, Response } from 'express';

import GeographicPoint from '../../sequelize/models/GeographicPoint';

interface IGetFileGeoPoints {
  fileId: string;
}

export default class FilesController {
  public async index(
    request: Request<IGetFileGeoPoints>,
    response: Response,
  ): Promise<Response> {
    const { fileId } = request.params;

    const files = await GeographicPoint.findAll({ where: { fileId } });

    return response.json(files);
  }
}
