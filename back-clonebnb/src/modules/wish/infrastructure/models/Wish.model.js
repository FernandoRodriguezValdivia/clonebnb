import { sequelize } from '../../../../database/config.sequelize.js';

export const Wish = sequelize.define('wish', {}, { timestamps: false });
