import mongoose, { Schema, Document } from 'mongoose';

export interface IErrorLogDocument extends Document {
  message: string;
  stack?: string;
  endpoint?: string;
  method?: string;
  userId?: string;
  timestamp: Date;
}

const errorLogSchema = new Schema<IErrorLogDocument>({
  message: {
    type: String,
    required: true,
  },
  stack: String,
  endpoint: String,
  method: String,
  userId: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IErrorLogDocument>('ErrorLog', errorLogSchema);
