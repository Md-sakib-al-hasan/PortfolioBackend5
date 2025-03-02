/* eslint-disable no-unused-vars */
import MessageModule from './message.model';
import { TUser } from './message.interface';
import QueryBuilder from '../../builder/QueryBuilder';

const createmessage = async (payload: TUser) => {
  const newproject = await MessageModule.create(payload);

  return newproject;
};

const getAllMessageDB = async (query: Record<string, unknown>) => {
  const userQeuery = new QueryBuilder(MessageModule.find(), query)
    .search(['description', 'email', 'name'])
    .filter()
    .sort()
    .paginate();

  const result = await userQeuery.modelQuery;
  const meta = await userQeuery.countTotal();
  return { result, meta };
};

export const MessageServices = {
  createmessage,
  getAllMessageDB,
};
