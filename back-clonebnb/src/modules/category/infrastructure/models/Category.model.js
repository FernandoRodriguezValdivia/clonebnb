import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/config.sequelize.js';
export const Category = sequelize.define('category', {
  title: {
    type: DataTypes.STRING,
  },
});
