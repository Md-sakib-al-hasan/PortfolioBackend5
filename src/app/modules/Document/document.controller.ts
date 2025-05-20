import httpStatus, { status } from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DocumentServices } from './document.service';
import AppError from '../../errors/AppError';

// const createvidoes = catchAsync(async (req, res) => {
//   const result = await DocumentServices.createVideoDB(req.body);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'project is created succesfully',
//     data: result,
//   });
// });
// const Updateupdaeudoes = catchAsync(async (req, res) => {
//   const { id } = req.query;

//   if (typeof id !== 'string') {
//     throw new AppError(status.NOT_IMPLEMENTED, 'Ener the  court id');
//   }

//   const result = await DocumentServices.updatevideo(req.body, id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'video is updated succesfully',
//     data: result,
//   });
// });
const getAllDocument = catchAsync(async (req, res) => {
  const result = await DocumentServices.getAllDocumentDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user is getall text doucment succesfully',
    data: result,
  });
});

const getsingleDocument = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (typeof id !== 'string') {
    throw new AppError(status.NOT_IMPLEMENTED, 'Ener the  court id');
  }
  const result = await DocumentServices.singleDocumentBD(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully get single text documet',
    data: result,
  });
});

// const Deletesingelvidoe = catchAsync(async (req, res) => {
//   const { id } = req.query;

//   if (typeof id !== 'string') {
//     throw new AppError(status.NOT_IMPLEMENTED, 'Ener the  court id');
//   }
//   const result = await DocumentServices.singledeleteBlogBD(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'video is delete succesfully',
//     data: result,
//   });
// });

export const DocumentControllers = {
  getAllDocument,
  getsingleDocument,
};
