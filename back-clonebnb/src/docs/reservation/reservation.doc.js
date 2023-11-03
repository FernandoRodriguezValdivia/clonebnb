export const createReservationDoc = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Reservation'],
    description: 'create reservation - done',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/reservationCreate',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Reservation created',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'integer',
                  example: 0,
                },
                message: {
                  type: 'string',
                  example: 'Reservation created',
                },
                data: {
                  type: 'object',
                  example: '{}',
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'integer',
                  example: 1,
                },
                message: {
                  type: 'string',
                  example: 'Error',
                },
                data: {
                  type: 'object',
                  example: '{}',
                },
              },
            },
          },
        },
      },
    },
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
    description: 'get all reservation by host - done',
    responses: {
      200: {
        description: 'Reservations obtained',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'integer',
                  example: 0,
                },
                message: {
                  type: 'string',
                  example: 'Reservation obtained',
                },
                data: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/getReservation',
                  },
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'integer',
                  example: 1,
                },
                message: {
                  type: 'string',
                  example: 'Error',
                },
                data: {
                  type: 'object',
                  example: '{}',
                },
              },
            },
          },
        },
      },
    },
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
    description: 'get all reservation by visitor - done',
    responses: {
      200: {
        description: 'Reservations obtained',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'integer',
                  example: 0,
                },
                message: {
                  type: 'string',
                  example: 'Reservation obtained',
                },
                data: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/getReservation',
                  },
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'integer',
                  example: 1,
                },
                message: {
                  type: 'string',
                  example: 'Error',
                },
                data: {
                  type: 'object',
                  example: '{}',
                },
              },
            },
          },
        },
      },
    },
  },
};
