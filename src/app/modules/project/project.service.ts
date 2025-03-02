/* eslint-disable no-unused-vars */

import status from 'http-status';
import AppError from '../../errors/AppError';
import { TProject } from './project.interface';
import Project from './project.model';
import QueryBuilder from '../../builder/QueryBuilder';

const createprojectDB = async (payload: TProject) => {
  const newproject = await Project.create(payload);

  return newproject;
};

const updateproject = async (payload: Partial<TProject>, id: string) => {
  const { featured, Technologies, specialFeatured, ...nomaldata } = payload;
  const project = await Project.findByIdAndUpdate(id, nomaldata, {
    new: true,
  });

  if (!project) {
    throw new AppError(status.NOT_FOUND, 'This Project not found');
  }

  if (featured) {
    for (let i = 0; i < featured.length; i++) {
      project.featured.push(featured[i]);
    }
  }
  if (Technologies) {
    for (let i = 0; i < Technologies.length; i++) {
      project.Technologies.push(Technologies[i]);
    }
  }
  if (specialFeatured) {
    for (let i = 0; i < specialFeatured.length; i++) {
      project.specialFeatured.push(specialFeatured[i]);
    }
  }

  const newupdate = await Project.findByIdAndUpdate(id, project, {
    new: true,
  });

  return newupdate;
};
const getAllporjectDB = async (query: Record<string, unknown>) => {
  const userQeuery = new QueryBuilder(Project.find({ isDelete: false }), query)
    .search(['status', 'details', 'description', 'title'])
    .filter()
    .sort()
    .paginate();

  const result = await userQeuery.modelQuery;
  const meta = await userQeuery.countTotal();
  return { result, meta };
};

const singleprojectBD = async (id: string) => {
  const reuslt = await Project.findOne({ _id: id, isDelete: false });
  if (!reuslt) {
    throw new AppError(status.NOT_FOUND, 'This user Not found');
  }
  return reuslt;
};

const singledeleteprojectBD = async (id: string) => {
  const reuslt = await Project.findByIdAndUpdate(
    id,
    { isDelete: true },
    { new: true },
  );
  if (!reuslt) {
    throw new AppError(status.NOT_FOUND, 'This user Not found');
  }
  return reuslt;
};

export const ProjectServices = {
  createprojectDB,
  updateproject,
  singleprojectBD,
  getAllporjectDB,
  singledeleteprojectBD,
};
