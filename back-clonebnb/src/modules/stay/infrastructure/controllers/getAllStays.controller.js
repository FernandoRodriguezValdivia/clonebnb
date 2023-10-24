import { Image } from '../../../image/infrastructure/models/Image.model.js';
import { getAllStays, uploadImage } from '../../aplication/stay.service.js';
import { Stay } from '../models/Stay.model.js';

export const getAll = async (req, res) => {
  const { page = 1, size = 10, category = 0 } = req.query;
  const pageInt = parseInt(page);
  const sizeInt = parseInt(size);
  const categoryInt = parseInt(category);
  if (
    isNaN(pageInt) ||
    isNaN(sizeInt) ||
    isNaN(categoryInt) ||
    categoryInt < 0 ||
    categoryInt > 10 ||
    pageInt <= 0 ||
    sizeInt <= 0
  ) {
    return res
      .status(400)
      .json({ status: 1, message: 'Invalid parameters', data: [] });
  }
  const stays = await getAllStays({
    page: pageInt,
    size: sizeInt,
    category: categoryInt,
  });
  res.status(200).json({ status: 0, message: '', data: { stays } });
};

export const createStay = async (req, res) => {
  const { id } = req;
  const data = req.body;
  const files = req.files;
  // console.log(data);
  try {
    if (
      isNaN(parseInt(data.categoriaId)) ||
      parseInt(data.categoriaId) > 10 ||
      parseInt(data.categoriaId) < 1
    )
      throw new Error('categoryId is invalid');
    const resultFiles = await uploadImage(files);
    await Stay.create(
      {
        hostId: id,
        ...data,
        images: resultFiles,
      },
      {
        include: [Image],
      },
    );
    res.status(201).json({ status: 0, data: {}, message: 'Stay created' });
  } catch (error) {
    res.status(400).json({ status: 1, data: {}, message: error.message });
  }
};
