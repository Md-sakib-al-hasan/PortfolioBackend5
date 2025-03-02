import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValiditons } from './blog.validation';
import { BlogControllers } from './blog.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-blog',
  auth(),
  validateRequest(BlogValiditons.BlogSchema),
  BlogControllers.createvidoes,
);
router.patch(
  '/update-blog',
  auth(),
  validateRequest(BlogValiditons.BlogUpdaeSchema),
  BlogControllers.Updateupdaeudoes,
);
router.delete('/delete-blog', auth(), BlogControllers.Deletesingelvidoe);
router.get('/getsingle-blog', BlogControllers.getsinglevideo);
router.get('/get-all-blog', BlogControllers.getAllvidoes);

export const BlogRoutes = router;
