export const errorHandler = (_: any, __: any, res: any, ___: any) => {
  res.status(500).json({ error: 'Something went wrong.' })
};