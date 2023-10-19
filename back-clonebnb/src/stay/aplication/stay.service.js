import { StayGetAll } from '../domain/stayGetAll.class.js';
import { Stay } from '../infrastructure/models/Stay.model.js';

export const getAllStays = async ({ page, size }) => {
  const offset = (page - 1) * size;
  const response = await Stay.findAll({
    offset,
    limit: Number(size),
    raw: true,
  });

  const stays = [];
  response.forEach((stay) => {
    stays.push(
      new StayGetAll({
        ...stay,
        imagen: [stay.imagen1, stay.imagen2, stay.imagen3],
      }),
    );
  });

  return stays;
};

export const uploadImage = async (files) => {
  if (process.env.NODE_ENV === 'production') {
    console.log('por setear cloudinary');
  } else {
    const idImage = Math.floor(Math.random() * 100) + 1;
    return [
      `https://picsum.photos/id/${idImage}/300/300`,
      `https://picsum.photos/id/${idImage + 1}/300/300`,
      `https://picsum.photos/id/${idImage + 2}/300/300`,
    ];
  }
};
