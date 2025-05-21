import { Schema, model } from 'mongoose';
import { TEducation } from './education.interface';

const EducationSchema: Schema = new Schema<TEducation>(
  {
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    year: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const EducationModule = model<TEducation>('Education', EducationSchema);

export default EducationModule;
