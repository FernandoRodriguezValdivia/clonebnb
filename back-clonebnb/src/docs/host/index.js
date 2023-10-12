import { createHostDoc, loginHost } from './host.doc.js';

export const docHost = {
  '/api/v1/host/createHost': {
    ...createHostDoc,
  },
  '/api/v1/host/loginHost': {
    ...loginHost,
  },
};
