import { z } from 'zod';

const MessageSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    description: z.string().min(1, 'Description is required'),
  }),
});

export const MessageValiditons = {
  MessageSchema,
};
