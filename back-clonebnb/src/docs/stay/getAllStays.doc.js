export const getAllStaysDoc = {
  get: {
    tags: ['Stay'],
    description: 'Get all stays for landing page',
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
