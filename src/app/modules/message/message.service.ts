/* eslint-disable no-unused-vars */

import status from "http-status";
import AppError from "../../errors/AppError";
import MessageModule from "./message.model";
import { TUser } from "./message.interface";




const createmessage = async (payload:TUser) => {

    const newproject = await MessageModule.create(payload);

    return newproject;
 
};




// const getAllporjectDB = async (query: Record<string, unknown>) => {
//   const userQeuery = new QueryBuilder(User.find(), query)
//     .search(['name', 'price', 'company', 'size'])
//     .filter()
//     .sort()
//     .paginate();

//   const result = await userQeuery.modelQuery;
//   const meta = await userQeuery.countTotal();
//   return { result, meta };
// };





export const MessageServices = {
   
  createmessage 
};
