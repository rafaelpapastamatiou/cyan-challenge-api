import { Request, Response } from 'express';

import FindGeographicPoints from '@modules/geographicPoints/services/FindGeographicPoints';

interface IGetFileGeoPoints {
  fileId: string;
}

export default class FilesController {
  public async index(
    request: Request<IGetFileGeoPoints>,
    response: Response,
  ): Promise<Response> {
    const { fileId } = request.params;

    const findGeographicPoints = new FindGeographicPoints();

    const points = await findGeographicPoints.execute({ fileId });

    return response.json(points);
  }
}
