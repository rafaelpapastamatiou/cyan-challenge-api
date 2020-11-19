import AppError from '@shared/errors/AppError';

import { validate } from 'uuid';

import File from '../infra/sequelize/models/File';

import GeographicPoint from '../infra/sequelize/models/GeographicPoint';

interface IRequest {
  fileId: string;
}

export default class ReadCSV {
  public async execute({ fileId }: IRequest): Promise<GeographicPoint[]> {
    if (!validate(fileId)) {
      throw new AppError('Invalid uuid.', 400);
    }

    const file = await File.findOne({ where: { id: fileId } });

    if (!file) {
      throw new AppError('File not found.', 404);
    }

    const points = await GeographicPoint.findAll({ where: { fileId } });

    return points;
  }
}
