/* eslint-disable no-unused-vars */

import status from 'http-status';
import AppError from '../../errors/AppError';
import BlogModule from './blog.model';
import { TBlog } from './blog.interface';
import QueryBuilder from '../../builder/QueryBuilder';

const createVideoDB = async (payload: TBlog) => {
  const newproject = await BlogModule.create(payload);

  return newproject;
};

const updatevideo = async (payload: Partial<TBlog>, id: string) => {
  const project = await BlogModule.findByIdAndUpdate(id, payload, {
    new: true,
  });

  if (!project) {
    throw new AppError(status.NOT_FOUND, 'This blog not found');
  }

  return project;
};

const getAllBlogDB = async (query: Record<string, unknown>) => {
  const userQeuery = new QueryBuilder(
    BlogModule.find({ isDelete: false }),
    query,
  )
    .search(['description', ' subject', ' title'])
    .filter()
    .sort()
    .paginate();

  const result = await userQeuery.modelQuery;
  const meta = await userQeuery.countTotal();
  return { result, meta };
};

const singleBlogBD = async (id: string) => {
  const reuslt = await BlogModule.findOne({ _id: id, isDelete: false });
  if (!reuslt) {
    throw new AppError(status.NOT_FOUND, 'This blog Not found');
  }
  return reuslt;
};

const singledeleteBlogBD = async (id: string) => {
  const reuslt = await BlogModule.findByIdAndUpdate(
    id,
    { isDelete: true },
    { new: true },
  );
  if (!reuslt) {
    throw new AppError(status.NOT_FOUND, 'This blog Not found');
  }
  return reuslt;
};

export const BlogServices = {
  createVideoDB,
  updatevideo,
  getAllBlogDB,
  singleBlogBD,
  singledeleteBlogBD,
};
