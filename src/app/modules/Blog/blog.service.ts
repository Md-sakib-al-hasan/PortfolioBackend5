/* eslint-disable no-unused-vars */

import status from "http-status";
import AppError from "../../errors/AppError";
import BlogModule from "./blog.model";
import { TBlog } from "./blog.interface";



const createVideoDB = async (payload:TBlog) => {

    const newproject = await BlogModule.create(payload);

    return newproject;
 
};



const updatevideo = async (payload: Partial<TBlog>, id: string ) => {
    // Fetch the project by ID from the database
    let project = await BlogModule.findById(id);
    console.log(project)
  
    // If the project doesn't exist, throw a 404 error
    if (!project) {
      throw new AppError(status.NOT_FOUND, 'This Project not found');
    }
    
    
    
   
  
    return;
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



// const singleprojectBD = async (email: string) => {
//   const reuslt = await User.findOne({ email });
//   if (!reuslt) {
//     throw new AppError(status.NOT_FOUND, 'This user Not found');
//   }
//   return reuslt;
// };

// const singledeleteprojectBD = async (email: string) => {
//   const reuslt = await User.findOne({ email });
//   if (!reuslt) {
//     throw new AppError(status.NOT_FOUND, 'This user Not found');
//   }
//   return reuslt;
// };

export const BlogServices = {
   createVideoDB,
   updatevideo,

};
