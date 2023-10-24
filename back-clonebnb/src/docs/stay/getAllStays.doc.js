export const getAllStaysDoc = {
  get: {
    tags: ['Stay'],
    description: 'Get all stays for landing page - done',
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
      {
        name: 'category',
        in: 'query',
        schema: {
          type: 'integer',
          minimum: 1,
          maximum: 10,
          example: '1',
        },
        description: 'categoryId',
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
    description: 'Get stay by id - in progess',
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
  },
};

export const postStayDoc = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Stay'],
    description: 'Create stay - done',
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            $ref: '#/components/schemas/createStay',
          },
          encoding: {
            img: {
              contentType: 'image/png, image/jpeg',
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Stay created',
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
                  example: 'Stay created',
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
