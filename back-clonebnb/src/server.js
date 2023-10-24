/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import { sequelize } from './database/config.sequelize.js';
import swaggerUI from 'swagger-ui-express';
import { stayRouter } from './modules/stay/infrastructure/stay.controller.js';
import { hostRouter } from './modules/host/infrastructure/host.controller.js';
import { visitorRouter } from './modules/visitor/infrasctructure/visitor.controller.js';
import swaggerConfig from './docs/index.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/v1/stays', stayRouter);
app.use('/api/v1/host', hostRouter);
app.use('/api/v1/visitor', visitorRouter);
app.use('/api/v1/category/getCategory', (req, res) => {
  const categories = [
    {
      id: 1,
      title: 'Casas de campo',
    },
    {
      id: 2,
      title: 'Cabañas',
    },
    {
      id: 3,
      title: 'Casas de playa',
    },
    {
      id: 4,
      title: 'Frente al lago',
    },
    {
      id: 5,
      title: 'Minicasas',
    },
    {
      id: 6,
      title: 'Habitaciones',
    },
    {
      id: 7,
      title: 'Departamentos',
    },
    {
      id: 8,
      title: 'Campamentos',
    },
    {
      id: 9,
      title: 'Casas rodantes',
    },
    {
      id: 10,
      title: 'Piscinas',
    },
  ];
  res.status(200).json({ status: 0, message: '', data: { categories } });
});
app.use('/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log(error);
  }

  console.log(
    `Documentacion disponible en http://localhost:${port}/v1/api-docs`,
  );
  console.log(`Server is running in port: ${port}`);
});
