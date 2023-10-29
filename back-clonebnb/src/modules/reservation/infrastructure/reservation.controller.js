import { Router } from 'express';
import { authorization } from '../../../middlewares/authorization.middleware.js';
import { Reservation } from './models/Reservation.model.js';

export const reservationRouter = Router();

reservationRouter.post(
  '/createReservation',
  authorization,
  async (req, res) => {
    const {
      startDate,
      endDate,
      quantityVisitors,
      totalPrice,
      stayId,
      hostId,
      visitorId,
    } = req.body;

    try {
      await Reservation.create({
        startDate,
        endDate,
        quantityVisitors,
        totalPrice,
        stayId,
        hostId,
        visitorId,
      });

      res
        .status(201)
        .json({ status: 0, message: 'Reservation create', data: {} });
    } catch (error) {
      res.status(400).json({ status: 1, message: error.message, data: {} });
    }
  },
);

reservationRouter.get(
  '/getAllReservationByVisitor',
  authorization,
  async (req, res) => {
    // const { startDate, endDate } = req.query;
    const visitorId = Number(req.id);
    try {
      const reservations = await Reservation.findAll({
        where: {
          visitorId,
          // startDate: {
          //   [Op.between]: [startDate, endDate],
          // },
        },
        raw: true,
      });
      res.status(200).json({ status: 0, message: '', data: { reservations } });
    } catch (error) {
      res.status(400).json({ status: 0, message: error.message, data: {} });
    }
  },
);

reservationRouter.get(
  '/getAllReservationByHost',
  authorization,
  async (req, res) => {
    // const { startDate, endDate } = req.query;
    const hostId = Number(req.id);
    try {
      const reservations = await Reservation.findAll({
        where: {
          hostId,
          // startDate: {
          //   [Op.between]: [startDate, endDate],
          // },
        },
        raw: true,
      });
      res.status(200).json({ status: 0, message: '', data: { reservations } });
    } catch (error) {
      res.status(400).json({ status: 0, message: error.message, data: {} });
    }
  },
);
