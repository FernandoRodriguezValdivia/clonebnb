import 'dotenv/config';

export const config = {
  database: {
    dbUserName: process.env.DATABASE_USERNAME,
    dbPassword: process.env.DATABASE_PASSWORD,
    dbName: process.env.DATABASE_NAME,
    dbHost: process.env.DATABASE_HOST,
  },
  app: {
    key: process.env.APP_KEY,
  },
  cloudinary: {
    dbCloudName: process.env.CLOUD_NAME,
    dbApiKey: process.env.API_KEY,
    dbApiSecret: process.env.API_SECRET,
  },
};
