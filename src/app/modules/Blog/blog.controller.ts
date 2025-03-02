import httpStatus, { status } from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';
import AppError from '../../errors/AppError';

const createvidoes = catchAsync(async (req, res) => {
  const result = await BlogServices.createVideoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'project is created succesfully',
    data: result,
  });
});
const Updateupdaeudoes = catchAsync(async (req, res) => {
  const { id } = req.query;

  if (typeof id !== 'string') {
    throw new AppError(status.NOT_IMPLEMENTED, 'Ener the  court id');
  }

  const result = await BlogServices.updatevideo(req.body, id);
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'video is updated succesfully',
    data: result,
  });
});
const getAllvidoes = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user is getall video succesfully',
    data: result,
  });
});

const getsinglevideo = catchAsync(async (req, res) => {
  const { id } = req.query;

  if (typeof id !== 'string') {
    throw new AppError(status.NOT_IMPLEMENTED, 'Ener the  court id');
  }
  const result = await BlogServices.singleBlogBD(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully get single vidoes',
    data: result,
  });
});

const Deletesingelvidoe = catchAsync(async (req, res) => {
  const { id } = req.query;

  if (typeof id !== 'string') {
    throw new AppError(status.NOT_IMPLEMENTED, 'Ener the  court id');
  }
  const result = await BlogServices.singledeleteBlogBD(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'video is delete succesfully',
    data: result,
  });
});

export const BlogControllers = {
  Deletesingelvidoe,
  getAllvidoes,
  getsinglevideo,
  Updateupdaeudoes,
  createvidoes,
};
