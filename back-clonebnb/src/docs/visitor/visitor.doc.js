export const createVisitorDoc = {
  post: {
    tags: ['Visitor'],
    description: 'Register visitor - in progress',
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
  },
};

export const loginVisitorDoc = {
  post: {
    tags: ['Visitor'],
    description: 'Login visitor - in progress',
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
  },
};
