import { DataTypes } from 'Sequelize';
import { sequelize } from '../../../database/config.sequelize.js';

export const Host = sequelize.define('Host', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: 'email',
      msg: 'Email already exists',
    },
  },
  password: {
    type: DataTypes.STRING,
  },
});
