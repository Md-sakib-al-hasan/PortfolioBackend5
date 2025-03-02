import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValiditons } from './project.validation';
import { ProjectControllers } from './project.controller';


const router = express.Router();

router.post(
  '/create-project',
  validateRequest(ProjectValiditons.ProjectSchema),
  ProjectControllers.createProject,
  
);
router.patch(
  '/update-project',
  validateRequest(ProjectValiditons.ProjectUpdateSchema),
  ProjectControllers.UpdateProject,
  
);
router.delete(
  '/delete-project',
  ProjectControllers.Deletesingelproject,
  
);
router.get(
  '/getsingle-project',
  ProjectControllers.getsingleproject,
  
);
router.get(
  '/get-all-project',
  ProjectControllers.getAllPrject,
  
);




export const projectRoutes = router;
