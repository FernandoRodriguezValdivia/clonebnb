import { getReservationByHostDoc } from './category.doc.js';

export const docCategory = {
  '/api/v1/category/getCategory': {
    ...getReservationByHostDoc,
  },
};
