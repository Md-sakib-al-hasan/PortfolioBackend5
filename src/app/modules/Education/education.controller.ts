import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { EducationServices } from './education.service';

const createEducation = catchAsync(async (req, res) => {
  const result = await EducationServices.createEducation(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education created successfully',
    data: result,
  });
});

const getAllEducations = catchAsync(async (req, res) => {
  const result = await EducationServices.getAllEducationsDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Educations retrieved successfully',
    data: result,
  });
});

export const EducationControllers = {
  createEducation,
  getAllEducations,
};
