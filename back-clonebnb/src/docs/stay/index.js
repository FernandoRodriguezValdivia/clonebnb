import {
  getAllStaysDoc,
  getStayByIdDoc,
  postStayDoc,
} from './getAllStays.doc.js';

export const docStay = {
  '/api/v1/stays/getAllStays': {
    ...getAllStaysDoc,
  },
  '/api/v1/stays/getStayById/{id}': {
    ...getStayByIdDoc,
  },
  '/api/v1/stays/createStay': {
    ...postStayDoc,
  },
};
