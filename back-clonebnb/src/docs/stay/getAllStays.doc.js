export const getAllStaysDoc = {
  get: {
    tags: ['Stay'],
    description: 'Get all stays for landing page - use mock data',
    parameters: [
      {
        name: 'page',
        in: 'query',
        schema: {
          type: 'integer',
          example: '1',
        },
        description: 'page number, value default: 1',
      },
      {
        name: 'size',
        in: 'query',
        schema: {
          type: 'integer',
          example: '10',
        },
        description: 'page size, value default: 10',
      },
    ],
    responses: {
      200: {
        description: 'Stays were obtained',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'integer',
                },
                message: {
                  type: 'string',
                  example: '',
                },
                data: {
                  type: 'object',
                  properties: {
                    stays: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/getAllStay',
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

export const getStayByIdDoc = {
  get: {
    tags: ['Stay'],
    description: 'Get stay by id - in progress',
  },
};

export const postStayDoc = {
  post: {
    tags: ['Stay'],
    description: 'Create stay - in progress',
  },
};
