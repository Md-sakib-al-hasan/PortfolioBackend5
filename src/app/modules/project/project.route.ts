import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValiditons } from './project.validation';
import { ProjectControllers } from './project.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-project',
  auth(),
  validateRequest(ProjectValiditons.ProjectSchema),
  ProjectControllers.createProject,
);
router.patch(
  '/update-project',
  auth(),
  validateRequest(ProjectValiditons.ProjectUpdateSchema),
  ProjectControllers.UpdateProject,
);
router.delete(
  '/delete-project',
  auth(),
  ProjectControllers.Deletesingelproject,
);
router.get('/getsingle-project', ProjectControllers.getsingleproject);
router.get('/get-all-project', ProjectControllers.getAllPrject);

export const projectRoutes = router;
