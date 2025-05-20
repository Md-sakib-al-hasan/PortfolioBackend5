import { Schema, model } from 'mongoose';
import { TDocument } from './document.interface';

const BlogSchema: Schema = new Schema<TDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    readTime: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      name: {
        type: String,
        required: true,
      },
    },
    coverImage: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const DocumentModule = model<TDocument>('document', BlogSchema);

export default DocumentModule;
