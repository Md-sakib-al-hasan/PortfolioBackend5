import { z } from 'zod';

const CourseSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    provider: z.string().min(1, 'Provider is required'),
    period: z.string().min(1, 'Period is required'),
    description: z.string().min(1, 'Description is required'),
  }),
});

export const CourseValidations = {
  CourseSchema,
};
