import httpStatus, { status } from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { updateLocale } from 'moment';
import { ProjectServices } from './project.service';
import AppError from '../../errors/AppError';


const createProject = catchAsync(async (req, res) => {
  const result =  await ProjectServices.createprojectDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'project is created succesfully',
    data: result,
  });
});
const UpdateProject = catchAsync(async (req, res) => {
   const {id} = req.query
   console.log(id)

   if (typeof id !== 'string') {
     throw new AppError(status.NOT_IMPLEMENTED,"Ener the  court id") 
  }

  const result =  await ProjectServices.updateproject(req.body,id)
  console.log(result)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'project is updated succesfully',
    data: result,
  });
});
const getAllPrject = catchAsync(async (req, res) => {
  const result = ""

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' getall project succesfully',
    data: result,
  });
});

const getsingleproject = catchAsync(async (req, res) => {
  const result = ""
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully get single projects',
    data: result,
  });
});

const Deletesingelproject = catchAsync(async (req, res) => {
    const result = ""
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'porject is delete succesfully',
      data: result,
    });
  });

export const ProjectControllers = {
  createProject,
  UpdateProject,
  Deletesingelproject,
  getAllPrject,
  getsingleproject,
  
};
