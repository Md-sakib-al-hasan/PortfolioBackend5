import { z } from 'zod';

const BlogSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    subject: z.string().min(1, { message: 'Subject is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    imgurl: z.string().url({ message: 'Invalid URL for imgurl' }),
    videourl: z.string().url({ message: 'Invalid URL for videourl' }),
  }),
});

const BlogUpdaeSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }).optional(),
    subject: z.string().min(1, { message: 'Subject is required' }).optional(),
    description: z
      .string()
      .min(1, { message: 'Description is required' })
      .optional(),
    imgurl: z.string().url({ message: 'Invalid URL for imgurl' }).optional(),
    videourl: z
      .string()
      .url({ message: 'Invalid URL for videourl' })
      .optional(),
  }),
});

export const BlogValiditons = {
  BlogSchema,
  BlogUpdaeSchema,
};
