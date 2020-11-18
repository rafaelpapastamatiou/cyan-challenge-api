import { Options, Sequelize } from 'sequelize';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../../../config/database.js');

const { development, production } = config;

class Database {
  public connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(
      process.env.NODE_ENV?.includes('dev')
        ? (development as Options)
        : (production as Options),
    );
  }
}

const database: Database = new Database();

export default database;
