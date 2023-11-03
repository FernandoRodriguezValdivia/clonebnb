import { createUserDoc, loginUser } from './user.doc.js';

export const docUser = {
  '/api/v1/user/createUser': {
    ...createUserDoc,
  },
  '/api/v1/user/loginUser': {
    ...loginUser,
  },
};
