import { getAllStays, uploadImage } from '../../aplication/stay.service.js';
import { Stay } from '../models/Stay.model.js';

export const getAll = async (req, res) => {
  const { page = 1, size = 10 } = req.query;
  const pageInt = parseInt(page);
  const sizeInt = parseInt(size);
  if (isNaN(pageInt) || isNaN(sizeInt) || pageInt <= 0 || sizeInt <= 0) {
    return res
      .status(400)
      .json({ status: 1, message: 'Invalid parameters', data: [] });
  }
  const stays = await getAllStays({ page, size });
  res.status(200).json({ status: 0, message: '', data: { stays } });
  // const stay = await Stay.findAll({where: }, {
  //   include: {
  //     model: Category,
  //     attributes: { exclude: ['createdAt', 'updatedAt'] },
  //   },
  //   attributes: { exclude: ['createdAt', 'updatedAt'] },
  // });

  // res.json({ stay });
};

export const createStay = async (req, res) => {
  const { id } = req;
  const data = req.body;
  const files = req.files;
  // console.log(data);
  try {
    const resultFiles = await uploadImage(files);
    await Stay.create({
      hostId: id,
      ...data,
      ...resultFiles,
    });
    res.status(201).json({ status: 0, data: {}, message: 'Stay created' });
  } catch (error) {
    res.json({ status: 1, data: {}, message: error.message });
  }
};
