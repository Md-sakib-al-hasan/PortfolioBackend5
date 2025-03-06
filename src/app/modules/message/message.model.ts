import { Schema, model } from 'mongoose';
import { TUser } from './message.interface';

const MessageSchema: Schema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const MessageModule = model<TUser>('Message', MessageSchema);

export default MessageModule;
