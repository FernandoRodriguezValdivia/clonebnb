export const createVisitorDoc = {
  post: {
    tags: ['Visitor'],
    description: 'Register visitor - done',
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
        description: 'Visitor created',
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
                  example: 'Visitor created',
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

export const loginVisitorDoc = {
  post: {
    tags: ['Visitor'],
    description: 'Login visitor - done',
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
        description: 'Visitor Login',
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
                  example: 'Visitor login',
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
