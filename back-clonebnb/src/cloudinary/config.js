import { v2 as cloudinary } from 'cloudinary';
import { config } from '../config/index.js';

const { dbCloudName, dbApiSecret, dbApiKey } = config.cloudinary;
cloudinary.config({
  cloud_name: dbCloudName,
  api_key: dbApiKey,
  api_secret: dbApiSecret,
});

export { cloudinary };
