import express from 'express';
import { DocumentControllers } from './document.controller';
import { DocumentValidations } from './document.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-blog',
  validateRequest(DocumentValidations.BlogSchema),
  DocumentControllers.createDocuments,
);
router.patch(
  '/update-blog/:id',

  validateRequest(DocumentValidations.BlogUpdateSchema),
  DocumentControllers.UpdateDcoment,
);
router.delete('/delete-blog/:id', DocumentControllers.DeletesingelDocument);
router.get('/getsingle-blog/:id', DocumentControllers.getsingleDocument);
router.get('/get-all-blog', DocumentControllers.getAllDocument);

export const DocumentRoutes = router;
