export const createHostDoc = {
  post: {
    tags: ['Host'],
    description: 'Register host - in progress',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/userCreate',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Host created',
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
                  example: 'Host created',
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
                  example: 'Email already exists',
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

export const loginHost = {
  post: {
    tags: ['Host'],
    description: 'Login host - in progress',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/userCreate',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Host Login',
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
                  example: 'Host login',
                },
                data: {
                  type: 'object',
                  properties: {
                    token: {
                      type: 'string',
                      example: 'token',
                    },
                  },
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Data incorrect',
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
                  example: 'Data incorrect',
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
    },
  },
};
