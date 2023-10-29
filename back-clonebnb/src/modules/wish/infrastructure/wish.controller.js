import { Router } from 'express';
import { authorization } from '../../../middlewares/authorization.middleware.js';
import { Wish } from './models/Wish.model.js';
import { Stay } from '../../stay/infrastructure/models/Stay.model.js';
import { Image } from '../../image/infrastructure/models/Image.model.js';

export const wishRouter = Router();

wishRouter.post('/addStay', authorization, async (req, res) => {
  const userId = Number(req.id);
  const { stayId } = req.body;
  try {
    const wish = await Wish.create({
      userId,
      stayId,
    });
    res.status(201).json({ status: 0, message: 'stay added', data: { wish } });
  } catch (error) {
    res.status(400).json({ status: 1, message: error.message, data: {} });
  }
});

wishRouter.get('/getWish', authorization, async (req, res) => {
  const userId = Number(req.id);

  try {
    const wish = await Wish.findAll({
      where: {
        userId,
      },
      include: {
        model: Stay,
        attributes: [
          'id',
          'titulo',
          'descripcion',
          'tarifa',
          'wifi',
          'estacionamiento',
          'privado',
          'numeroHabitaciones',
          'capacidad',
          'pais',
          'estado',
          'ciudad',
        ],
        include: {
          model: Image,
          attributes: ['id', 'url'],
        },
      },
    });
    const wishList = wish.map((item) => item.stay);
    res
      .status(201)
      .json({ status: 0, message: 'wish obtained', data: { wishList } });
  } catch (error) {
    res.status(400).json({ status: 1, message: error.message, data: {} });
  }
});

wishRouter.delete('/removeStay/:id', authorization, async (req, res) => {
  const { id } = req.params;
  try {
    const stayId = Number(id);
    await Wish.destroy({
      where: {
        stayId,
      },
    });

    res.status(200).json({ status: 0, message: '', data: {} });
  } catch (error) {
    res.status(400).json({ status: 1, message: error.message, data: {} });
  }
});
