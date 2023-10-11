import { config } from './config.js';
import { configComponents } from './components.js';
import { docStay } from './stay/index.js';

const swaggerConfig = {
  ...config,
  ...configComponents,
  ...docStay,
};

export default swaggerConfig;
