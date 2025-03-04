/* eslint-disable no-unused-vars */

import CommentModule from './comment.model';
import { TComment } from './comment.interface';
import QueryBuilder from '../../builder/QueryBuilder';

const createcomment = async (payload: TComment) => {
  const newproject = await CommentModule.create(payload);

  return newproject;
};

const getAllporjectDB = async (query: Record<string, unknown>) => {
  const userQeuery = new QueryBuilder(CommentModule.find(), query)
    .search(['comment',"blogid"])
    .filter()
    .sort()
    .paginate();

  const result = await userQeuery.modelQuery;
  const meta = await userQeuery.countTotal();
  return { result, meta };
};

export const CommentServices = {
  createcomment,
  getAllporjectDB,
};
