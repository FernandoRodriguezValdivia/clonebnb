import { Router } from 'express';
import { getAll } from './controllers/getAllStays.controller.js';

export const stayRouter = Router();

stayRouter.get('/getAllStays', getAll);
