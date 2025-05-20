/* eslint-disable no-unused-vars */

import status from 'http-status';
import AppError from '../../errors/AppError';
import DocumentModule from './docuemnt.model';
import QueryBuilder from '../../builder/QueryBuilder';

// const createVideoDB = async (payload: TBlog) => {
//   const newproject = await BlogModule.create(payload);

//   return newproject;
// };

// const updatevideo = async (payload: Partial<TBlog>, id: string) => {
//   const project = await BlogModule.findByIdAndUpdate(id, payload, {
//     new: true,
//   });

//   if (!project) {
//     throw new AppError(status.NOT_FOUND, 'This blog not found');
//   }

//   return project;
// };

const getAllDocumentDB = async (query: Record<string, unknown>) => {
  const userQeuery = new QueryBuilder(DocumentModule.find(), query)
    .search([])
    .filter()
    .sort()
    .paginate();

  const result = await userQeuery.modelQuery;
  const meta = await userQeuery.countTotal();
  return { result, meta };
};

const singleDocumentBD = async (id: string) => {
  const reuslt = await DocumentModule.findById(id);
  if (!reuslt) {
    throw new AppError(status.NOT_FOUND, 'This blog Not found');
  }
  return reuslt;
};

// const singledeleteBlogBD = async (id: string) => {
//   const reuslt = await DocumentModule.findByIdAndUpdate(
//     id,
//     { isDelete: true },
//     { new: true },
//   );
//   if (!reuslt) {
//     throw new AppError(status.NOT_FOUND, 'This blog Not found');
//   }
//   return reuslt;
// };

export const DocumentServices = {
  getAllDocumentDB,
  singleDocumentBD,
};
