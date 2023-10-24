import { DataTypes } from 'sequelize';
import { sequelize } from '../../../../database/config.sequelize.js';
import { Category } from '../../../category/infrastructure/models/Category.model.js';
import { Image } from '../../../image/infrastructure/models/Image.model.js';
import { Reservation } from '../../../reservation/infrastructure/models/Reservation.model.js';

export const Stay = sequelize.define('stay', {
  titulo: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  tarifa: {
    type: DataTypes.DECIMAL(12, 2),
  },
  capacidad: {
    type: DataTypes.INTEGER,
  },
  numeroHabitaciones: {
    type: DataTypes.INTEGER,
  },
  wifi: {
    type: DataTypes.BOOLEAN,
  },
  estacionamiento: {
    type: DataTypes.BOOLEAN,
  },
  privado: {
    type: DataTypes.BOOLEAN,
  },
  pais: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING,
  },
  ciudad: {
    type: DataTypes.STRING,
  },
  avenida: {
    type: DataTypes.STRING,
  },
});

Category.hasMany(Stay, { foreignKey: 'categoriaId' });
Stay.belongsTo(Category, { foreignKey: 'categoriaId' });

Stay.hasMany(Image, { foreignKey: 'alojamientoId' });
Image.belongsTo(Stay, { foreignKey: 'alojamientoId' });

Stay.hasMany(Reservation, { foreignKey: 'stayId' });
Reservation.belongsTo(Stay, { foreignKey: 'stayId' });
