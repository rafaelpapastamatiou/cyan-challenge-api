import IPoint from '@modules/geographicPoints/interfaces/IPoint';
import GeographicPoint from '../infra/sequelize/models/GeographicPoint';

interface IRequest {
  fileId: string;
  point: IPoint;
}

export default class CreateGeographicPoint {
  public async execute({ fileId, point }: IRequest): Promise<GeographicPoint> {
    const geographicPoint = await GeographicPoint.create({ fileId, point });

    return geographicPoint;
  }
}
