import { Request, Response, NextFunction } from 'express';
import { logError } from '../utils/logger';

export const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  await logError(err.message, err, req.path, req.method);

  res.status(500).json({
    success: false,
    message: err.message || 'Server Error',
  });
};
