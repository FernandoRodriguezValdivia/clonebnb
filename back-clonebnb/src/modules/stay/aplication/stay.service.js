import { cloudinary } from '../../../cloudinary/config.js';
import { Image } from '../../image/infrastructure/models/Image.model.js';
import { StayGetAll } from '../domain/stayGetAll.class.js';
import { Stay } from '../infrastructure/models/Stay.model.js';

export const getAllStays = async ({ page, size, category }) => {
  const offset = (page - 1) * size;
  const where = {};
  if (category > 0) where.categoriaId = category;
  const response = await Stay.findAll({
    offset,
    limit: Number(size),
    where,
    attributes: [
      'id',
      'titulo',
      'tarifa',
      'pais',
      'estado',
      'ciudad',
      'categoriaId',
    ],
    include: [
      {
        model: Image,
        attributes: ['id', 'url'],
      },
    ],
  });

  const responseJson = response.map((stay) => stay.toJSON());
  const stays = [];
  responseJson.forEach((stay) => {
    stays.push(
      new StayGetAll({
        ...stay,
        imagen: stay.images,
      }),
    );
  });

  return stays;
};

export const uploadImage = async (files) => {
  if (process.env.NODE_ENV === 'production') {
    try {
      const filesUpload = [];
      for (const [, value] of Object.entries(files)) {
        const { tempFilePath } = value;
        filesUpload.push(
          cloudinary.uploader.upload(tempFilePath, {
            upload_preset: 'ml_default',
          }),
        );
      }

      const allUpload = await Promise.all(filesUpload);
      return allUpload.map((upload) => ({
        url: upload.secure_url,
        urlId: upload.public_id,
      }));
    } catch (e) {
      throw new Error(e);
    }
  } else {
    const idImage = Math.floor(Math.random() * 100) + 1;
    return [
      {
        url: `https://picsum.photos/id/${idImage}/300/300`,
        urlId: `${idImage}`,
      },
      {
        url: `https://picsum.photos/id/${idImage + 1}/300/300`,
        urlId: `${idImage + 1}`,
      },
      {
        url: `https://picsum.photos/id/${idImage + 1}/300/300`,
        urlId: `${idImage + 1}`,
      },
    ];
  }
};
