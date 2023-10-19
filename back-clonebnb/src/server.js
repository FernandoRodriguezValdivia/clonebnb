import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { sequelize } from './database/config.sequelize.js';
import swaggerConfig from './docs/index.js';
import swaggerUI from 'swagger-ui-express';
import { stayRouter } from './stay/infrastructure/stay.controller.js';
import { hostRouter } from './host/infrastructure/host.controller.js';
import { visitorRouter } from './visitor/infrasctructure/visitor.controller.js';
import { categoryRouter } from './category/infrestructure/category.controller.js';
import './stay/infrastructure/models/Stay.model.js';
import './category/infrestructure/models/Category.model.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true,
  }),
);
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/v1/stays', stayRouter);
app.use('/api/v1/host', hostRouter);
app.use('/api/v1/visitor', visitorRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.listen(port, async () => {
  console.log(process.env.NODE_ENV);
  try {
    // await sequelize.sync({ alter: true });
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
