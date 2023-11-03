import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/config.sequelize.js';

export const Reservation = sequelize.define('reservation', {
  startDate: {
    type: DataTypes.DATEONLY,
  },
  endDate: {
    type: DataTypes.DATEONLY,
  },
  quantityVisitors: {
    type: DataTypes.INTEGER,
  },
  totalPrice: {
    type: DataTypes.DECIMAL(12, 2),
  },
});
