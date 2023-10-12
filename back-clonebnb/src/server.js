import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { stayRouter } from './stay/infrastructure/stay.controller.js';
import swaggerConfig from './docs/index.js';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/v1/stays', stayRouter);
app.use('/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.listen(port, () => {
  console.log(
    `Documentacion disponible en http://localhost:${port}/v1/api-docs`,
  );
  console.log(`Server is running in port: ${port}`);
});
