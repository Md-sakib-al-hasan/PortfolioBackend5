/* eslint-disable no-unused-vars */

import status from 'http-status';
import AppError from '../../errors/AppError';
import DocumentModule from './docuemnt.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { TDocument } from './document.interface';

const createDocumentDB = async (payload: TDocument) => {
  const newproject = await DocumentModule.create(payload);

  return newproject;
};

const updateDocument = async (payload: Partial<TDocument>, id: string) => {
  const project = await DocumentModule.findByIdAndUpdate(id, payload, {
    new: true,
  });

  if (!project) {
    throw new AppError(status.NOT_FOUND, 'This blog not found');
  }

  return project;
};

const getAllDocumentDB = async (query: Record<string, unknown>) => {
  const userQeuery = new QueryBuilder(DocumentModule.find(), query)
    .search(['title', 'excerpt', 'category'])
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

const singledeleteDocumentsBD = async (id: string) => {
  const reuslt = await DocumentModule.findByIdAndDelete(id);
  if (!reuslt) {
    throw new AppError(status.NOT_FOUND, 'This blog Not found');
  }
  return reuslt;
};

export const DocumentServices = {
  createDocumentDB,
  getAllDocumentDB,
  singleDocumentBD,
  singledeleteDocumentsBD,
  updateDocument,
};
