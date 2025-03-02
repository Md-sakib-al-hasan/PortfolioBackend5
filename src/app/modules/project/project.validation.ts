import { z } from 'zod';

// Zod schema for allarrayobject type (used for specialFeatured, Technologies, and featured)
const AllArrayObjectSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
});

// Zod schema for TProject type
const ProjectSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    details: z.string().min(1, { message: 'Details are required' }),
    status: z.string().min(1, { message: 'Status is required' }),
    imgurl: z.string().url({ message: 'Invalid URL for imgurl' }),
    videourl: z.string().url({ message: 'Invalid URL for videourl' }),
    frontendLiveLink: z
      .string()
      .url({ message: 'Invalid URL for frontendLiveLink' }),
    frontendSourceLink: z
      .string()
      .url({ message: 'Invalid URL for frontendSourceLink' }),
    backendLiveLink: z.string().url().optional(),
    backendSourceLink: z.string().url().optional(),
    specialFeatured: z
      .array(AllArrayObjectSchema)
      .min(1, { message: 'At least one special feature is required' }),
    Technologies: z
      .array(AllArrayObjectSchema)
      .min(1, { message: 'At least one technology is required' }),
    featured: z
      .array(AllArrayObjectSchema)
      .min(1, { message: 'At least one featured item is required' }),
  }),
});

const ProjectUpdateSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }).optional(),
    description: z
      .string()
      .min(1, { message: 'Description is required' })
      .optional(),
    details: z.string().min(1, { message: 'Details are required' }).optional(),
    status: z.string().min(1, { message: 'Status is required' }).optional(),
    imgurl: z.string().url({ message: 'Invalid URL for imgurl' }).optional(),
    videourl: z
      .string()
      .url({ message: 'Invalid URL for videourl' })
      .optional(),
    frontendLiveLink: z
      .string()
      .url({ message: 'Invalid URL for frontendLiveLink' })
      .optional(),
    frontendSourceLink: z
      .string()
      .url({ message: 'Invalid URL for frontendSourceLink' })
      .optional(),
    backendLiveLink: z
      .string()
      .url({ message: 'Invalid URL for backendLiveLink' })
      .optional(),
    backendSourceLink: z
      .string()
      .url({ message: 'Invalid URL for backendSourceLink' })
      .optional(),
    specialFeatured: z
      .array(AllArrayObjectSchema)
      .min(1, { message: 'At least one special feature is required' })
      .optional(),
    Technologies: z
      .array(AllArrayObjectSchema)
      .min(1, { message: 'At least one technology is required' })
      .optional(),
    featured: z
      .array(AllArrayObjectSchema)
      .min(1, { message: 'At least one featured item is required' })
      .optional(),
  }),
});

export const ProjectValiditons = {
  ProjectSchema,
  ProjectUpdateSchema,
};
