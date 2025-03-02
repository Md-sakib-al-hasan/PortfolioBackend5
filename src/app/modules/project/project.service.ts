/* eslint-disable no-unused-vars */

import status from "http-status";
import AppError from "../../errors/AppError";
import { TProject } from "./project.interface";
import Project from "./project.model";
import { updateArrayItems } from "./project.utils";



const createprojectDB = async (payload:TProject) => {

    const newproject = await Project.create(payload);

    return newproject;
 
};



const updateproject = async (payload: Partial<TProject>, id: string ) => {
    // Fetch the project by ID from the database
    let project = await Project.findById(id);
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

export const ProjectServices = {
  createprojectDB,
  updateproject,

};
