"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValiditons = void 0;
const zod_1 = require("zod");
// Zod schema for allarrayobject type (used for specialFeatured, Technologies, and featured)
const AllArrayObjectSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: 'Title is required' }),
    description: zod_1.z.string().min(1, { message: 'Description is required' }),
});
// Zod schema for TProject type
const ProjectSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, { message: 'Title is required' }),
        description: zod_1.z.string().min(1, { message: 'Description is required' }),
        details: zod_1.z.string().min(1, { message: 'Details are required' }),
        status: zod_1.z.string().min(1, { message: 'Status is required' }),
        imgurl: zod_1.z.string().url({ message: 'Invalid URL for imgurl' }),
        videourl: zod_1.z.string().url({ message: 'Invalid URL for videourl' }),
        frontendLiveLink: zod_1.z
            .string()
            .url({ message: 'Invalid URL for frontendLiveLink' }),
        frontendSourceLink: zod_1.z
            .string()
            .url({ message: 'Invalid URL for frontendSourceLink' }),
        backendLiveLink: zod_1.z.string().url().optional(),
        backendSourceLink: zod_1.z.string().url().optional(),
        specialFeatured: zod_1.z
            .array(AllArrayObjectSchema)
            .min(1, { message: 'At least one special feature is required' }),
        Technologies: zod_1.z
            .array(AllArrayObjectSchema)
            .min(1, { message: 'At least one technology is required' }),
        featured: zod_1.z
            .array(AllArrayObjectSchema)
            .min(1, { message: 'At least one featured item is required' }),
    }),
});
const ProjectUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, { message: 'Title is required' }).optional(),
        description: zod_1.z
            .string()
            .min(1, { message: 'Description is required' })
            .optional(),
        details: zod_1.z.string().min(1, { message: 'Details are required' }).optional(),
        status: zod_1.z.string().min(1, { message: 'Status is required' }).optional(),
        imgurl: zod_1.z.string().url({ message: 'Invalid URL for imgurl' }).optional(),
        videourl: zod_1.z
            .string()
            .url({ message: 'Invalid URL for videourl' })
            .optional(),
        frontendLiveLink: zod_1.z
            .string()
            .url({ message: 'Invalid URL for frontendLiveLink' })
            .optional(),
        frontendSourceLink: zod_1.z
            .string()
            .url({ message: 'Invalid URL for frontendSourceLink' })
            .optional(),
        backendLiveLink: zod_1.z
            .string()
            .url({ message: 'Invalid URL for backendLiveLink' })
            .optional(),
        backendSourceLink: zod_1.z
            .string()
            .url({ message: 'Invalid URL for backendSourceLink' })
            .optional(),
        specialFeatured: zod_1.z
            .array(AllArrayObjectSchema)
            .min(1, { message: 'At least one special feature is required' })
            .optional(),
        Technologies: zod_1.z
            .array(AllArrayObjectSchema)
            .min(1, { message: 'At least one technology is required' })
            .optional(),
        featured: zod_1.z
            .array(AllArrayObjectSchema)
            .min(1, { message: 'At least one featured item is required' })
            .optional(),
    }),
});
exports.ProjectValiditons = {
    ProjectSchema,
    ProjectUpdateSchema,
};
