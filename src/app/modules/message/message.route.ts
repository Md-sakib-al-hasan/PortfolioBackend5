import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { MessageValiditons } from './message.validation';
import { MessageControllers } from './message.controller';


const router = express.Router();

router.post(
  '/create-message',
  validateRequest(MessageValiditons.MessageSchema),
  MessageControllers.createvmessage,
  
);

router.get(
  '/get-all-message',
  MessageControllers.getAllmessage,
  
);




export const MessageRoutes = router;
