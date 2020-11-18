module.exports = {
  up: async queryInterface => {
    return queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
    );
  },

  down: async queryInterface => {
    return queryInterface.sequelize.query(
      'DROP EXTENSION IF EXISTS "uuid-ossp";',
    );
  },
};
