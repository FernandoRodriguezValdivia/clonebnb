export const createReservationDoc = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Reservation'],
    description: 'create reservation - in progress',
  },
};

export const getReservationByHostDoc = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Reservation'],
    description: 'get reservation by host - in progress',
  },
};

export const getAllReservationByHostDoc = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Reservation'],
    description: 'get all reservation by host - in progress',
  },
};

export const getReservationByVisitorDoc = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Reservation'],
    description: 'get reservation by visitor - in progress',
  },
};

export const getAllReservationByVisitorDoc = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Reservation'],
    description: 'get all reservation by visitor - in progress',
  },
};
