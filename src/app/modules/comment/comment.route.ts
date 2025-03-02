import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CommentValiditons } from './comment.validation';
import { CommentControllers } from './comment.controller';


const router = express.Router();

router.post(
  '/create-comment',
  validateRequest(CommentValiditons.CommentSchema),
  CommentControllers.createvcomment,
  
);

router.get(
  '/get-all-comment',
  CommentControllers.getAllcomment,
  
);




export const CommentRoutes = router;
