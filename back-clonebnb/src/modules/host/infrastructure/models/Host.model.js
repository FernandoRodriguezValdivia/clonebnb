import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/config.sequelize.js';
import { Stay } from '../../../stay/infrastructure/models/Stay.model.js';
import { Reservation } from '../../../reservation/infrastructure/models/Reservation.model.js';

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

Host.hasMany(Stay, { foreignKey: 'hostId' });
Stay.belongsTo(Host, { foreignKey: 'hostId' });

Host.hasMany(Reservation, { foreignKey: 'hostId' });
Reservation.belongsTo(Host, { foreignKey: 'hostId' });
