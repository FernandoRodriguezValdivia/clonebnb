import { DataTypes } from 'sequelize';
import { sequelize } from '../../../database/config.sequelize.js';
export const Category = sequelize.define('Category', {
  nombre: {
    type: DataTypes.STRING,
  },
});
