import IPoint from '@modules/geographicPoints/dtos/ICreatePoint';
import AppError from '@shared/errors/AppError';

import { Transaction } from 'sequelize/types';

import GeographicPoint from '../infra/sequelize/models/GeographicPoint';

interface IRequest {
  fileId: string;
  point: IPoint;
  transaction: Transaction | null;
  index: number;
}

export default class CreateGeographicPoint {
  public async execute({
    fileId,
    point,
    index,
    transaction = null,
  }: IRequest): Promise<GeographicPoint> {
    const { coordinates } = point;

    const [latitudeStr, longitudeStr] = coordinates;

    const latitude = parseFloat(latitudeStr);

    const longitude = parseFloat(longitudeStr);

    const checkLatitude = Number.isFinite(latitude) && Math.abs(latitude) < 90;

    const checkLongitude =
      Number.isFinite(longitude) && Math.abs(longitude) < 180;

    if (!checkLatitude || !checkLongitude) {
      throw new AppError(`Invalid coordinates on row ${index + 1} .`, 400);
    }

    const geographicPoint = await GeographicPoint.create(
      {
        fileId,
        point: { ...point, coordinates: [latitude, longitude] },
      },
      { transaction: transaction as Transaction },
    );

    return geographicPoint;
  }
}
