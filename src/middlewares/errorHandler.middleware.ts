import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message,
    status: status,
  });
};

export default errorHandler;
