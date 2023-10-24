import { getAllStays } from '../../aplication/stay.service.js';

export const getAll = (req, res) => {
  const { page = 1, size = 10, category = 0 } = req.query;
  const pageInt = parseInt(page);
  const sizeInt = parseInt(size);
  const categoryInt = parseInt(category);
  if (
    isNaN(pageInt) ||
    isNaN(sizeInt) ||
    isNaN(categoryInt) ||
    pageInt <= 0 ||
    sizeInt <= 0 ||
    category < 0
  ) {
    return res
      .status(400)
      .json({ status: 1, message: 'Invalid parameters', data: [] });
  }
  const stays = getAllStays({
    page: pageInt,
    size: sizeInt,
    category: categoryInt,
  });
  res.status(200).json({ status: 0, message: '', data: { stays } });
};
