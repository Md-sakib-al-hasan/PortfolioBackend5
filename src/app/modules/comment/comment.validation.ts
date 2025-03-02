import { z } from 'zod';

const CommentSchema = z.object({
  body: z.object({
    comment: z.string().min(1, 'Name is required'),
  }),
});

export const CommentValiditons = {
  CommentSchema,
};
