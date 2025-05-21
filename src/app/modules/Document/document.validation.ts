import { z } from 'zod';

const BlogSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    excerpt: z.string().min(1, { message: 'Excerpt is required' }),
    date: z.string().min(1, { message: 'Date is required' }),
    readTime: z.string().min(1, { message: 'Read time is required' }),
    category: z.string().min(1, { message: 'Category is required' }),
    author: z.object({
      name: z.string().min(1, { message: 'Author name is required' }),
    }),
    coverImage: z.string().url({ message: 'Invalid URL for cover image' }),
    content: z.string().min(1, { message: 'Content is required' }),
    tags: z
      .array(z.string())
      .min(1, { message: 'At least one tag is required' })
      .optional(),
    isPublished: z.boolean().default(false).optional(),
  }),
});

const BlogUpdateSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }).optional(),
    excerpt: z.string().min(1, { message: 'Excerpt is required' }).optional(),
    date: z.string().min(1, { message: 'Date is required' }).optional(),
    readTime: z
      .string()
      .min(1, { message: 'Read time is required' })
      .optional(),
    category: z.string().min(1, { message: 'Category is required' }).optional(),
    author: z
      .object({
        name: z
          .string()
          .min(1, { message: 'Author name is required' })
          .optional(),
      })
      .optional(),
    coverImage: z
      .string()
      .url({ message: 'Invalid URL for cover image' })
      .optional(),
    content: z.string().min(1, { message: 'Content is required' }).optional(),
    tags: z
      .array(z.string())
      .min(1, { message: 'At least one tag is required' })
      .optional(),
    isPublished: z.boolean().optional(),
    isDelete: z.boolean().optional(), // Added for updates
  }),
});

export const DocumentValidations = {
  BlogSchema,
  BlogUpdateSchema,
};
