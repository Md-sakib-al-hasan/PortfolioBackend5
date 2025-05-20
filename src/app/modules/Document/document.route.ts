import express from 'express';
import { DocumentControllers } from './document.controller';

const router = express.Router();

// router.post(
//   '/create-blog',

//   validateRequest(BlogValiditons.BlogSchema),
//   BlogControllers.createvidoes,
// );
// router.patch(
//   '/update-blog',

//   validateRequest(BlogValiditons.BlogUpdaeSchema),
//   BlogControllers.Updateupdaeudoes,
// );
// router.delete('/delete-blog', BlogControllers.Deletesingelvidoe);
router.get('/getsingle-blog/:id', DocumentControllers.getsingleDocument);
router.get('/get-all-blog', DocumentControllers.getAllDocument);

export const DocumentRoutes = router;
