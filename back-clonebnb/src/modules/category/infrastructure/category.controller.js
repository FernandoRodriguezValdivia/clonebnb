import { Router } from 'express';
import { Category } from './models/Category.model.js';

export const categoryRouter = Router();

categoryRouter.post('/createCategory', async (req, res) => {
  const title = req.body.title;
  if (title) {
    try {
      await Category.create({ title });
      res
        .status(201)
        .json({ status: 0, message: 'Category created', data: {} });
    } catch (error) {
      res.status(400).json({ status: 1, message: 'Title is empty', data: {} });
    }
  } else {
    res.status(400).json({ status: 1, message: 'Title is empty', data: {} });
  }
});

categoryRouter.get('/getCategory', async (req, res) => {
  try {
    const categories = await Category.findAll({
      raw: true,
      attributes: ['id', 'title'],
    });
    res.status(201).json({
      status: 0,
      message: 'Categories obtained',
      data: { categories },
    });
  } catch (error) {
    res.status(400).json({ status: 1, message: 'Title is empty', data: {} });
  }
});
