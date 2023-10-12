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
  },
};
