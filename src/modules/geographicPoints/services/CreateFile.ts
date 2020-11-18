import File from '../infra/sequelize/models/File';

interface IRequest {
  url: string;
}

export default class CreateFile {
  public async execute({ url }: IRequest): Promise<File> {
    const file = await File.create({ url });

    return file;
  }
}
