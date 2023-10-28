import { config } from '../../../config/index.js';
import { Router } from 'express';
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Visitor } from './models/Visitor.model.js';

export const visitorRouter = Router();

const verifiedPassword = async (passwordSent, passwordStored) => {
  const verified = await compare(passwordSent, passwordStored);
  return verified;
};

visitorRouter.post('/createVisitor', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email.trim().length === 0) throw new Error('Email is empty');
    if (password.trim().length === 0) throw new Error('Password is empty');
    const hashPassword = await hash(password, 10);
    await Visitor.create({ email, password: hashPassword });
    res.status(201).json({ status: 0, message: 'Visitor Created', data: {} });
  } catch (error) {
    res.status(400).json({ status: 1, message: error.message, data: {} });
  }
});

visitorRouter.post('/loginVisitor', async (req, res) => {
  const { email, password } = req.body;
  try {
    const visitor = await Visitor.findOne({
      where: { email },
      attributes: ['id', 'email', 'password'],
      raw: true,
    });
    if (visitor) {
      const isVerified = await verifiedPassword(password, visitor.password);
      if (isVerified) {
        const token = jwt.sign(
          { id: visitor.id, type: 'visitor' },
          config.app.key,
        );
        res
          .status(201)
          .json({ status: 0, message: 'Visitor Login', data: { token } });
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
