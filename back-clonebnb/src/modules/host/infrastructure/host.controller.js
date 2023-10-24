import { Router } from 'express';
import { hash, compare } from 'bcrypt';
import { config } from '../../../config/index.js';
import jwt from 'jsonwebtoken';

import { Host } from './models/Host.model.js';

export const hostRouter = Router();

const verifiedPassword = async (passwordSent, passwordStored) => {
  const verified = await compare(passwordSent, passwordStored);
  return verified;
};

hostRouter.post('/createHost', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashPassword = await hash(password, 10);
    await Host.create({ email, password: hashPassword });
    res.status(201).json({ status: 0, message: 'Host Created', data: {} });
  } catch (error) {
    res.status(400).json({ status: 1, message: error.message, data: {} });
  }
});

hostRouter.post('/loginHost', async (req, res) => {
  const { email, password } = req.body;
  try {
    const host = await Host.findOne({
      where: { email },
      attributes: ['id', 'email', 'password'],
      raw: true,
    });
    if (host) {
      const isVerified = await verifiedPassword(password, host.password);
      if (isVerified) {
        const token = jwt.sign({ id: host.id }, config.app.key);
        res
          .status(201)
          .json({ status: 0, message: 'Host Login', data: { token } });
      } else {
        res
          .status(400)
          .json({ status: 1, message: 'Data incorrect', data: {} });
      }
    } else {
      res.status(400).json({ status: 1, message: 'Data incorrect', data: {} });
    }
  } catch (error) {
    res.status(400).json({ status: 0, message: error.message, data: {} });
  }
});
