import { config } from '../config/index.js';
import jwt from 'jsonwebtoken';

export const authorizationVisitor = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    try {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      const { id, type } = jwt.verify(bearerToken, config.app.key);
      if (type !== 'visitor') throw new Error('Unauthenticated');
      req.id = id;
      next();
    } catch (error) {
      res.status(401).json({ status: -1, message: 'Unauthenticated' });
    }
  } else {
    res.status(401).json({ status: -1, message: 'Unauthenticated' });
  }
};

export const authorizationHost = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    try {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      const { id, type } = jwt.verify(bearerToken, config.app.key);
      if (type !== 'host') throw new Error('Unauthenticated');
      req.id = id;
      next();
    } catch (error) {
      res.status(401).json({ status: -1, message: 'Unauthenticated' });
    }
  } else {
    res.status(401).json({ status: -1, message: 'Unauthenticated' });
  }
};
