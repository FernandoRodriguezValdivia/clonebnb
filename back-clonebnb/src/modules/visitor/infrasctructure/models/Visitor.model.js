import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/config.sequelize.js';
import { Reservation } from '../../../reservation/infrastructure/models/Reservation.model.js';
import { Stay } from '../../../stay/infrastructure/models/Stay.model.js';
import { Wish } from '../../../wish/infrastructure/models/Wish.model.js';

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

Visitor.belongsToMany(Stay, { through: Wish });
Stay.belongsToMany(Visitor, { through: Wish });

Stay.hasMany(Wish);
Wish.belongsTo(Stay);
