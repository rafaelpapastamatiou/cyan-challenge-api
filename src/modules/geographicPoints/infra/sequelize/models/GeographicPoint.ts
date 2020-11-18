import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

import database from '@shared/infra/database';

import IPoint from '@modules/geographicPoints/interfaces/IPoint';

import File from './File';

interface IGeoPointAttr {
  id: string;
  point: IPoint;
  fileId: string;
}

type IGeoPointCreationAttr = Optional<IGeoPointAttr, 'id'>;

class GeographicPoint extends Model<IGeoPointAttr, IGeoPointCreationAttr> {
  public id!: string;

  public latitude!: string;

  public longitude!: string;

  public fileId!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

GeographicPoint.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.literal('uuid_generate_v4()'),
    },
    point: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: false,
    },
    fileId: {
      type: DataTypes.UUID,
      defaultValue: null,
      allowNull: true,
    },
  },
  {
    sequelize: database.connection,
    tableName: 'geographic_points',
    freezeTableName: true,
  },
);

File.hasMany(GeographicPoint, {
  sourceKey: 'id',
  foreignKey: 'fileId',
});

GeographicPoint.belongsTo(File, {
  targetKey: 'id',
  foreignKey: 'fileId',
});

export default GeographicPoint;
