import mongoose, { Schema, Document, model } from 'mongoose';
import { TBlog } from './blog.interface';




// Main schema for TProject
const BlogSchema: Schema = new Schema<TBlog>(
  {
    
      title: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      imgurl: {
        type: String,
        required: true,
      },
      videourl: {
        type: String,
        required: true,
      },
    isDelete:{
        type: Boolean,
         default:false
      },
  },
  {
    timestamps: true,
  }
);


const BlogModule = model<TBlog>('Blog', BlogSchema);

export default BlogModule;
