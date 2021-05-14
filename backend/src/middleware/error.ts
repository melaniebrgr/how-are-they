import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (_, __, res, ___) => {
  res.status(500).json({ error: 'Something went wrong.' })
};