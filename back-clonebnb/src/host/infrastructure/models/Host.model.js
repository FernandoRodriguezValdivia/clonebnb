import { DataTypes } from 'sequelize';
import { sequelize } from '../../../database/config.sequelize.js';
import { Stay } from '../../../stay/infrastructure/models/Stay.model.js';

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

Host.hasMany(Stay, { foreignKey: 'hostId', as: 'stays' });
Stay.belongsTo(Host, { foreignKey: 'hostId' });
