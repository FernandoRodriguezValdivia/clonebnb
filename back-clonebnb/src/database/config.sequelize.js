import { config } from '../config/index.js';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  config.database.dbName,
  config.database.dbUserName,
  config.database.dbPassword,
  {
    host: config.database.dbHost,
    dialect: 'mysql',
  },
);
