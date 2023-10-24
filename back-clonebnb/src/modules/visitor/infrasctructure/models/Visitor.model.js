import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/config.sequelize.js';
import { Reservation } from '../../../reservation/infrastructure/models/Reservation.model.js';

export const Visitor = sequelize.define('visitor', {
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

Visitor.hasMany(Reservation, { foreignKey: 'visitorId' });
Reservation.belongsTo(Visitor, { foreignKey: 'visitorId' });
