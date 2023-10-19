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
    titulo: {
      type: 'string',
      example: 'Villa con Vista al Océano',
    },
    descripcion: {
      type: 'string',
      example: 'Villa lujosa con impresionantes vistas al océano',
    },
    pais: {
      type: 'string',
      example: 'Argentina',
    },
    estado: {
      type: 'string',
      example: 'Buenos Aires',
    },
    ciudad: {
      type: 'string',
      example: 'Buenos Aires',
    },
    avenida: {
      type: 'string',
      example: 'Avenida las Flores N°550',
    },
    tarifa: {
      type: 'integer',
      example: 500,
    },
    capacidad: {
      type: 'integer',
      example: 8,
    },
    imagen1: {
      type: 'string',
      format: 'binary',
    },
    imagen2: {
      type: 'string',
      format: 'binary',
    },
    imagen3: {
      type: 'string',
      format: 'binary',
    },
    numeroHabitaciones: {
      type: 'integer',
      example: 4,
    },
    wifi: {
      type: 'boolean',
      example: true,
    },
    estacionamiento: {
      type: 'boolean',
      example: true,
    },
    privado: {
      type: 'boolean',
      example: true,
    },
    categoriaId: {
      type: 'integer',
      example: 1,
    },
  },
  required: [
    'titulo',
    'descripcion',
    'tarifa',
    'capacidad',
    'pais',
    'ciudad',
    'estado',
    'avenida',
    'imagen1',
    'imagen2',
    'imagen3',
    'numeroHabitaciones',
    'wifi',
    'estacionamiento',
    'privado',
    'categoriaId',
  ],
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

const securitySchemes = {
  bearerAuth: {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  },
};

export const configComponents = {
  components: {
    schemas: {
      getAllStay: schemaGetAllStay,
      userCreate: schemaUserCreate,
      createStay: schemaCreateStay,
    },
    securitySchemes,
  },
};
