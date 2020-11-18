module.exports = {
  up: async queryInterface => {
    return queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS postgis;',
    );
  },

  down: async queryInterface => {
    return queryInterface.sequelize.query('DROP EXTENSION IF EXISTS postgis;');
  },
};
