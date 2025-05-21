import { z } from 'zod';

const EducationSchema = z.object({
  body: z.object({
    degree: z.string().min(1, 'Degree is required'),
    institution: z.string().min(1, 'Institution is required'),
    year: z.string().min(1, 'Year is required'),
    description: z.string().min(1, 'Description is required'),
  }),
});

export const EducationValidations = {
  EducationSchema,
};
