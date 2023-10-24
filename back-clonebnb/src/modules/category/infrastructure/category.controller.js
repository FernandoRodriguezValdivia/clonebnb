import { Router } from 'express';
import { Category } from './models/Category.model.js';

export const categoryRouter = Router();

categoryRouter.post('/createCategory', async (req, res) => {
  const nombre = req.body.nombre;
  if (nombre) {
    try {
      await Category.create({ nombre });
      res
        .status(201)
        .json({ status: 0, message: 'Category created', data: {} });
    } catch (error) {
      res.status(400).json({ status: 1, message: 'Name is empty', data: {} });
    }
  }
});
