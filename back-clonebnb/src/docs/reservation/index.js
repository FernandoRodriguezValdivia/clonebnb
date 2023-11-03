import {
  createReservationDoc,
  getAllReservationByHostDoc,
  getAllReservationByVisitorDoc,
  getReservationByHostDoc,
  getReservationByVisitorDoc,
} from './reservation.doc.js';

export const docReservation = {
  '/api/v1/reservation/createReservation': {
    ...createReservationDoc,
  },
  '/api/v1/reservation/getAllReservationByHost': {
    ...getAllReservationByHostDoc,
  },
  '/api/v1/reservation/getAllReservationByVisitor': {
    ...getAllReservationByVisitorDoc,
  },
  '/api/v1/reservation/getReservationByHost/{id}': {
    ...getReservationByHostDoc,
  },
  '/api/v1/reservation/getReservationByVisitor/{id}': {
    ...getReservationByVisitorDoc,
  },
};
