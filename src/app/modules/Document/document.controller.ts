import httpStatus, { status } from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DocumentServices } from './document.service';
import AppError from '../../errors/AppError';

const createDocuments = catchAsync(async (req, res) => {
  const result = await DocumentServices.createDocumentDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'project is created succesfully',
    data: result,
  });
});
const UpdateDcoment = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (typeof id !== 'string') {
    throw new AppError(status.NOT_IMPLEMENTED, 'Ener the  court id');
  }

  const result = await DocumentServices.updateDocument(req.body, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'video is updated succesfully',
    data: result,
  });
});
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

const DeletesingelDocument = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (typeof id !== 'string') {
    throw new AppError(status.NOT_IMPLEMENTED, 'Ener the  court id');
  }
  const result = await DocumentServices.singleDocumentBD(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'video is delete succesfully',
    data: result,
  });
});

export const DocumentControllers = {
  getAllDocument,
  getsingleDocument,
  DeletesingelDocument,
  createDocuments,
  UpdateDcoment,
};
