export const getReservationByHostDoc = {
  get: {
    tags: ['Category'],
    description: 'Get all categories - mock data',
    responses: {
      200: {
        description: 'Get all categories',
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
                  example: '',
                },
                data: {
                  type: 'object',
                  properties: {
                    categories: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: {
                            type: 'integer',
                            example: 1,
                          },
                          title: {
                            type: 'string',
                            example: 'Casas de campo',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
