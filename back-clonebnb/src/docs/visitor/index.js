import { createVisitorDoc, loginVisitorDoc } from './visitor.doc.js';

export const docVisitor = {
  '/api/v1/visitor/createVisitor': {
    ...createVisitorDoc,
  },
  '/api/v1/visitor/loginVisitor': {
    ...loginVisitorDoc,
  },
};
