"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValiditons = void 0;
const zod_1 = require("zod");
const BlogSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, { message: 'Title is required' }),
        subject: zod_1.z.string().min(1, { message: 'Subject is required' }),
        description: zod_1.z.string().min(1, { message: 'Description is required' }),
        imgurl: zod_1.z.string().url({ message: 'Invalid URL for imgurl' }),
        videourl: zod_1.z.string().url({ message: 'Invalid URL for videourl' }),
    }),
});
const BlogUpdaeSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, { message: 'Title is required' }).optional(),
        subject: zod_1.z.string().min(1, { message: 'Subject is required' }).optional(),
        description: zod_1.z
            .string()
            .min(1, { message: 'Description is required' })
            .optional(),
        imgurl: zod_1.z.string().url({ message: 'Invalid URL for imgurl' }).optional(),
        videourl: zod_1.z
            .string()
            .url({ message: 'Invalid URL for videourl' })
            .optional(),
    }),
});
exports.BlogValiditons = {
    BlogSchema,
    BlogUpdaeSchema,
};
