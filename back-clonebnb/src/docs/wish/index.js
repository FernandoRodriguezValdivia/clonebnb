import { createWishDoc, getWishDoc, removeWishDoc } from './wish.doc.js';

export const docWish = {
  '/api/v1/wish/addStay': {
    ...createWishDoc,
  },
  '/api/v1/wish/getWish': {
    ...getWishDoc,
  },
  '/api/v1/wish/removeStay/{id}': {
    ...removeWishDoc,
  },
};
