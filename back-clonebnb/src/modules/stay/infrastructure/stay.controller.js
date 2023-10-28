import { Router } from 'express';
import {
  createStay,
  getAll,
  getStayById,
} from './controllers/getAllStays.controller.js';
import { authorizationHost } from '../../../middlewares/authorization.middleware.js';

export const stayRouter = Router();

stayRouter.get('/getAllStays', getAll);
stayRouter.post('/createStay', authorizationHost, createStay);
stayRouter.get('/getStayById/:id', getStayById);
