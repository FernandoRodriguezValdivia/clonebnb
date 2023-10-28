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
      type: 'number',
      format: 'float',
      example: 500.99,
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
    categoria: {
      type: 'integer',
      minimum: 1,
      maximum: 10,
      example: 1,
    },
  },
};

const schemaGetStayById = {
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
    descripcion: {
      type: 'string',
      example: 'Villa lujosa con impresionantes vistas al océano',
    },
    tarifa: {
      type: 'number',
      format: 'float',
      example: 500.99,
    },
    wifi: {
      type: 'boolean',
      example: true,
    },
    estacionamiento: {
      type: 'boolean',
      example: true,
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
    estado: {
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
      minimum: 1,
      maximum: 10,
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

const schemaReservationCreate = {
  type: 'object',
  properties: {
    startDate: {
      type: 'date',
      example: '2023-10-27',
    },
    endDate: {
      type: 'date',
      example: '2023-10-29',
    },
    quantityVisitors: {
      type: 'integer',
      example: 4,
    },
    totalPrice: {
      type: 'number',
      format: 'float',
      example: 60.0,
    },
    stayId: {
      type: 'integer',
      example: 1,
    },
    hostId: {
      type: 'integer',
      example: 1,
    },
    visitorId: {
      type: 'integer',
      example: 1,
    },
  },
};

const schemaGetReservation = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
    },
    startDate: {
      type: 'date',
      example: '2023-10-27',
    },
    endDate: {
      type: 'date',
      example: '2023-10-29',
    },
    quantityVisitors: {
      type: 'integer',
      example: 4,
    },
    totalPrice: {
      type: 'number',
      format: 'float',
      example: 60.0,
    },
    stayId: {
      type: 'integer',
      example: 1,
    },
    hostId: {
      type: 'integer',
      example: 1,
    },
    visitorId: {
      type: 'integer',
      example: 1,
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
      getStayById: schemaGetStayById,
      reservationCreate: schemaReservationCreate,
      getReservation: schemaGetReservation,
    },
    securitySchemes,
  },
};
