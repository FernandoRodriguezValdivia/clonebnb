import { getAllStaysDoc } from './getAllStays.doc.js';

export const docStay = {
  paths: {
    '/api/v1/stays/getAllStays': {
      ...getAllStaysDoc,
    },
  },
};
