import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValiditons } from './blog.validation';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post(
  '/create-blog',

  validateRequest(BlogValiditons.BlogSchema),
  BlogControllers.createvidoes,
);
router.patch(
  '/update-blog',

  validateRequest(BlogValiditons.BlogUpdaeSchema),
  BlogControllers.Updateupdaeudoes,
);
router.delete('/delete-blog', BlogControllers.Deletesingelvidoe);
router.get('/getsingle-blog', BlogControllers.getsinglevideo);
router.get('/get-all-blog', BlogControllers.getAllvidoes);

export const BlogRoutes = router;
