const schemaGetAllStay = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
    },
    titulo: {
      type: 'string',
      example: 'Villa con Vista al Océano',
    },
    tarifa: {
      type: 'integer',
      example: 500,
    },
    imagen: {
      type: 'array',
      items: {
        type: 'string',
      },
      example: [
        'https://picsum.photos/id/1/300/300',
        'https://picsum.photos/id/2/300/300',
        'https://picsum.photos/id/3/300/300',
      ],
    },
    pais: {
      type: 'string',
      example: 'Argentina',
    },
    provincia: {
      type: 'string',
      example: 'Buenos Aires',
    },
    ciudad: {
      type: 'string',
      example: 'Buenos Aires',
    },
  },
};

const schemaCreateStay = {
  type: 'object',
  properties: {
    título: {
      required: true,
      type: 'string',
      example: 'Villa con Vista al Océano',
    },
    descripción: {
      required: true,
      type: 'string',
      example: 'Villa lujosa con impresionantes vistas al océano',
    },
    precio: {
      required: true,
      type: 'integer',
      example: 500,
    },
    capacidad: {
      required: true,
      type: 'integer',
      example: 8,
    },
    imagen_1: {
      required: true,
      type: 'string',
      format: 'binary',
    },
    imagen_2: {
      required: true,
      type: 'string',
      format: 'binary',
    },
    imagen_3: {
      required: true,
      type: 'string',
      format: 'binary',
    },
    habitaciones: {
      required: true,
      type: 'integer',
      example: 4,
    },
    wifi: {
      required: true,
      type: 'boolean',
      example: true,
    },
    estacionamiento: {
      required: true,
      type: 'boolean',
      example: true,
    },
    privado: {
      required: true,
      type: 'boolean',
      example: true,
    },
  },
};

const schemaUserCreate = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      example: 'jondoe@example.com',
    },
    password: {
      type: 'string',
      example: 'password1234',
    },
  },
};

export const configComponents = {
  components: {
    schemas: {
      getAllStay: schemaGetAllStay,
      userCreate: schemaUserCreate,
      createStay: schemaCreateStay,
    },
  },
};
