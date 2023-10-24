import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/config.sequelize.js';

export const Host = sequelize.define('host', {
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
