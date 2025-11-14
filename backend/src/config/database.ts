import mongoose from 'mongoose';
import { logError } from '../utils/logger';

export const connectDatabase = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    await logError('Database Connection Error', error as Error);
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};
