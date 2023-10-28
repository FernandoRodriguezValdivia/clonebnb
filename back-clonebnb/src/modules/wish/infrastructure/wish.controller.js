import { Router } from 'express';
import { authorizationVisitor } from '../../../middlewares/authorization.middleware.js';
import { Wish } from './models/Wish.model.js';
import { Stay } from '../../stay/infrastructure/models/Stay.model.js';

export const wishRouter = Router();

wishRouter.post('/addStay', authorizationVisitor, async (req, res) => {
  const visitorId = Number(req.id);
  const { stayId } = req.body;
  try {
    const wish = await Wish.create({
      visitorId,
      stayId,
    });
    res.status(201).json({ status: 0, message: 'stay added', data: { wish } });
  } catch (error) {
    res.status(400).json({ status: 1, message: error.message, data: {} });
  }
});

wishRouter.get('/getWish', authorizationVisitor, async (req, res) => {
  const visitorId = 1;

  const wish = await Wish.findAll({
    where: {
      visitorId,
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
    },
  });
  const wishList = wish.map((item) => item.stay);
  res
    .status(201)
    .json({ status: 0, message: 'wish obtained', data: { wishList } });
});

wishRouter.delete('/removeStay/:id', authorizationVisitor, async (req, res) => {
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
