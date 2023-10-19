import { Router } from 'express';
import { createStay, getAll } from './controllers/getAllStays.controller.js';
import { authorization } from '../../middlewares/authorization .middleware.js';

export const stayRouter = Router();

stayRouter.get('/getAllStays', getAll);
stayRouter.post('/createStay', authorization, createStay);
