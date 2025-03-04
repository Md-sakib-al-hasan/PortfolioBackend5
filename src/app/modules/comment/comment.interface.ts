import { Types } from 'mongoose';
export interface TComment {
  blogid:Types.ObjectId;
  comment: string;
}
