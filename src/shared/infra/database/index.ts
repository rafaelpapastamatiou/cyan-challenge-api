import { Options, Sequelize } from 'sequelize';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../../../config/database.js');

const { development, productionString } = config;

class Database {
  public connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    if (process.env.NODE_ENV === 'production') {
      this.connection = new Sequelize(productionString as string);
    } else {
      this.connection = new Sequelize(development as Options);
    }

    (async () => {
      try {
        await this.connection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
    })();
  }
}

const database: Database = new Database();

export default database;
