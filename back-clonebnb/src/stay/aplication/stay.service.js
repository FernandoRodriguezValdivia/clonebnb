import { cloudinary } from '../../cloudinary/config.js';
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
    try {
      const resultFiles = {};
      for (const [index, [, value]] of Object.entries(files).entries()) {
        const { tempFilePath } = value;
        const upload = await cloudinary.uploader.upload(tempFilePath, {
          upload_preset: 'ml_default',
        });
        resultFiles[`imagen${index + 1}`] = upload.url;
        resultFiles[`imagenId${index + 1}`] = upload.public_id;
      }
      return resultFiles;
    } catch (e) {
      throw new Error(e);
    }
  } else {
    const idImage = Math.floor(Math.random() * 100) + 1;
    return {
      imagen1: `https://picsum.photos/id/${idImage}/300/300`,
      imagenId1: `${idImage}`,
      imagen2: `https://picsum.photos/id/${idImage + 1}/300/300`,
      imagenId2: `${idImage + 1}`,
      imagen3: `https://picsum.photos/id/${idImage + 2}/300/300`,
      imagenId3: `${idImage + 2}`,
    };
  }
};
