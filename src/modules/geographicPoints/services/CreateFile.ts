import { Transaction } from 'sequelize/types';

import File from '../infra/sequelize/models/File';

interface IRequest {
  url: string;
  transaction: Transaction | null;
}

export default class CreateFile {
  public async execute({ url, transaction = null }: IRequest): Promise<File> {
    const file = await File.create(
      { url },
      { transaction: transaction as Transaction },
    );

    return file;
  }
}
