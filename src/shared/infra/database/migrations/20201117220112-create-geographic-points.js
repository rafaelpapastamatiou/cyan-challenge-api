module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('geographic_points', {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      point: {
        type: Sequelize.DataTypes.GEOMETRY('POINT'),
        allowNull: false,
      },
      fileId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'files',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        default: Sequelize.DataTypes.NOW,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        default: Sequelize.DataTypes.NOW,
      },
    });
  },

  down: async queryInterface => {
    return queryInterface.dropTable('geographic_points');
  },
};
