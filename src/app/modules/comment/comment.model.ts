import { Schema, model } from 'mongoose';
import { TComment } from './comment.interface';

const CommentSchema: Schema = new Schema<TComment>(
  {
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const CommentModule = model<TComment>('commnet', CommentSchema);

export default CommentModule;
