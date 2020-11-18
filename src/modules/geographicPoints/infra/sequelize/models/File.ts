import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

import database from '@shared/infra/database';

interface IFileAttr {
  id: string;
  url: string;
}

type IFileCreationAttr = Optional<IFileAttr, 'id'>;

class File extends Model<IFileAttr, IFileCreationAttr> {
  public id!: string;

  public url!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

File.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.literal('uuid_generate_v4()'),
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database.connection,
    tableName: 'files',
    freezeTableName: true,
  },
);

export default File;
