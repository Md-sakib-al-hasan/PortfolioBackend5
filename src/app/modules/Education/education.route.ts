import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { EducationValidations } from './education.validation';
import { EducationControllers } from './education.controller';

const router = express.Router();

router.post(
  '/create-education',

  validateRequest(EducationValidations.EducationSchema),
  EducationControllers.createEducation,
);

router.get('/get-all-educations', EducationControllers.getAllEducations);

export const EducationRoutes = router;
