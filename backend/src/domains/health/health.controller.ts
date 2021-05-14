import { RequestHandler } from 'express';

export const healthController: RequestHandler = (_, res) => {
  return res.json({
    ok: "OK"
  });
};