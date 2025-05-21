import { Schema, model } from 'mongoose';
import { TCourse } from './course.interface';

const CourseSchema: Schema = new Schema<TCourse>(
  {
    name: { type: String, required: true },
    provider: { type: String, required: true },
    period: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const CourseModule = model<TCourse>('Course', CourseSchema);

export default CourseModule;
