import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

// Schema for allarrayobject type
const AllArrayObjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Main schema for TProject
const ProjectSchema: Schema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    status: {
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
    frontendLiveLink: {
      type: String,
      required: true,
    },
    frontendSourceLink: {
      type: String,
      required: true,
    },
    backendLiveLink: {
      type: String,
      required: false,
    },
    backendSourceLink: {
      type: String,
      required: false,
    },
    specialFeatured: {
      type: [AllArrayObjectSchema],
      required: true,
    },
    Technologies: {
      type: [AllArrayObjectSchema],
      required: true,
    },
    featured: {
      type: [AllArrayObjectSchema],
      required: true,
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

const Project = model<TProject>('Project', ProjectSchema);

export default Project;
