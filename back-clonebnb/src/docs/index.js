import { config } from './config.js';
import { configComponents } from './components.js';
import { docStay } from './stay/index.js';
import { docHost } from './host/index.js';
import { docVisitor } from './visitor/index.js';
import { docReservation } from './reservation/index.js';

const swaggerConfig = {
  ...config,
  ...configComponents,
  paths: {
    ...docHost,
    ...docStay,
    ...docVisitor,
    ...docReservation,
  },
};

export default swaggerConfig;
