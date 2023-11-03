import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { hash, compare } from 'bcrypt';

import { config } from '../../../config/index.js';
import { User } from './models/User.model.js';

export const userRouter = Router();

const verifiedPassword = async (passwordSent, passwordStored) => {
  const verified = await compare(passwordSent, passwordStored);
  return verified;
};

userRouter.post('/createUser', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email.trim().length === 0) throw new Error('Email is empty');
    if (password.trim().length === 0) throw new Error('Password is empty');
    const hashPassword = await hash(password, 10);
    await User.create({ email, password: hashPassword });
    res.status(201).json({ status: 0, message: 'User Created', data: {} });
  } catch (error) {
    res.status(400).json({ status: 1, message: error.message, data: {} });
  }
});

userRouter.post('/loginUser', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: { email },
      attributes: ['id', 'email', 'password'],
      raw: true,
    });
    if (user) {
      const isVerified = await verifiedPassword(password, user.password);
      if (isVerified) {
        const token = jwt.sign({ id: user.id }, config.app.key);
        res
          .status(201)
          .json({ status: 0, message: 'User Login', data: { token } });
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
