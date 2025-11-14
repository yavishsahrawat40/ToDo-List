import ErrorLog from '../models/ErrorLog';

export const logError = async (
  message: string,
  error: Error,
  endpoint?: string,
  method?: string,
  userId?: string
): Promise<void> => {
  try {
    await ErrorLog.create({
      message,
      stack: error.stack,
      endpoint,
      method,
      userId,
    });
  } catch (logError) {
    console.error('Failed to log error to database:', logError);
  }
};
