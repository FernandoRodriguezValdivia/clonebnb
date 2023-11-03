import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/config.sequelize.js';
import { Stay } from '../../../stay/infrastructure/models/Stay.model.js';
import { Reservation } from '../../../reservation/infrastructure/models/Reservation.model.js';
import { Wish } from '../../../wish/infrastructure/models/Wish.model.js';

export const User = sequelize.define('user', {
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

User.hasMany(Stay, { foreignKey: 'hostId' });
Stay.belongsTo(User, { foreignKey: 'hostId' });

User.hasMany(Reservation, { as: 'host', foreignKey: 'hostId' });
Reservation.belongsTo(User, { as: 'host', foreignKey: 'hostId' });

User.hasMany(Reservation, { as: 'visitor', foreignKey: 'visitorId' });
Reservation.belongsTo(User, { as: 'visitor', foreignKey: 'visitorId' });

User.belongsToMany(Stay, { through: Wish });
Stay.belongsToMany(User, { through: Wish });

Stay.hasMany(Wish);
Wish.belongsTo(Stay);
