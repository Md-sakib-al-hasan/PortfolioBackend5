import httpStatus, { status } from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { MessageServices } from './message.service';



const createvmessage = catchAsync(async (req, res) => {
  const result =  await MessageServices.createmessage(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'message is created succesfully',
    data: result,
  });
});

const getAllmessage = catchAsync(async (req, res) => {
  const result = ""

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user is getall message succesfully',
    data: result,
  });
});



export const MessageControllers = {
  createvmessage ,
  getAllmessage,
  
};
