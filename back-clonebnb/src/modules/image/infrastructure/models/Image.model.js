import { sequelize } from '../../../../database/config.sequelize.js';
import { DataTypes } from 'sequelize';

export const Image = sequelize.define('image', {
  url: {
    type: DataTypes.STRING,
  },
  urlId: {
    type: DataTypes.STRING,
  },
});
