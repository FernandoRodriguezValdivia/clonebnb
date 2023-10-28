export const createWishDoc = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Wish'],
    description: 'Add Wish - done',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              stayId: {
                type: 'integer',
                example: 1,
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Wish added',
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
                  example: 'Wish added',
                },
                data: {
                  type: 'object',
                  example: {},
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

export const getWishDoc = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Wish'],
    description: 'get Wish - done',
    responses: {
      201: {
        description: 'Wish obtained',
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
                  example: 'Wish obtained',
                },
                data: {
                  type: 'object',
                  example: {},
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

export const removeWishDoc = {
  delete: {
    security: [{ bearerAuth: [] }],
    tags: ['Wish'],
    description: 'delete Stay - done',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          type: 'integer',
          example: '1',
        },
        description: 'Stay id',
      },
    ],
    responses: {
      200: {
        description: 'Wish delete',
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
                  example: 'Wish delete',
                },
                data: {
                  type: 'object',
                  example: {},
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
