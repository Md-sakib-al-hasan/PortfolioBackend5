import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CommentServices } from './comment.service';

const createvcomment = catchAsync(async (req, res) => {
  const result = await CommentServices.createcomment(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'message is created succesfully',
    data: result,
  });
});

const getAllcomment = catchAsync(async (req, res) => {
  const result = await CommentServices.getAllporjectDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user is getall message succesfully',
    data: result,
  });
});

export const CommentControllers = {
  createvcomment,
  getAllcomment,
};
