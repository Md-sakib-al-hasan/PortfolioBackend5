import { z } from 'zod';
const objectIdRegex = /^[a-fA-F0-9]{24}$/;

const CommentSchema = z.object({
  body: z.object({
    comment: z.string().min(1, 'Name is required'),
    blogid: z.string().regex(objectIdRegex, 'Invalid Blog ID'),
  }),
});

export const CommentValiditons = {
  CommentSchema,
};
