import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './course.controller';

const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidations.CourseSchema),
  CourseControllers.createCourse,
);

router.get('/get-all-courses', CourseControllers.getAllCourses);

export const CourseRoutes = router;
