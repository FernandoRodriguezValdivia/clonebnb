export const createUserDoc = {
  post: {
    tags: ['User'],
    description: 'Register user - done',
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
        description: 'User created',
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
                  example: 'User created',
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

export const loginUser = {
  post: {
    tags: ['User'],
    description: 'Login user - done',
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
        description: 'User Login',
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
                  example: 'User login',
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
