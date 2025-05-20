"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentValidations = void 0;
const zod_1 = require("zod");
const BlogSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, { message: 'Title is required' }),
        excerpt: zod_1.z.string().min(1, { message: 'Excerpt is required' }),
        date: zod_1.z.string().min(1, { message: 'Date is required' }), // You might want a more specific date validation
        readTime: zod_1.z.string().min(1, { message: 'Read time is required' }),
        category: zod_1.z.string().min(1, { message: 'Category is required' }),
        author: zod_1.z.object({
            name: zod_1.z.string().min(1, { message: 'Author name is required' }),
        }),
        coverImage: zod_1.z.string().url({ message: 'Invalid URL for cover image' }),
        content: zod_1.z.string().min(1, { message: 'Content is required' }),
        tags: zod_1.z
            .array(zod_1.z.string())
            .min(1, { message: 'At least one tag is required' }),
        isPublished: zod_1.z.boolean().default(false),
    }),
});
const BlogUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, { message: 'Title is required' }).optional(),
        excerpt: zod_1.z.string().min(1, { message: 'Excerpt is required' }).optional(),
        date: zod_1.z.string().min(1, { message: 'Date is required' }).optional(),
        readTime: zod_1.z
            .string()
            .min(1, { message: 'Read time is required' })
            .optional(),
        category: zod_1.z.string().min(1, { message: 'Category is required' }).optional(),
        author: zod_1.z
            .object({
            name: zod_1.z
                .string()
                .min(1, { message: 'Author name is required' })
                .optional(),
        })
            .optional(),
        coverImage: zod_1.z
            .string()
            .url({ message: 'Invalid URL for cover image' })
            .optional(),
        content: zod_1.z.string().min(1, { message: 'Content is required' }).optional(),
        tags: zod_1.z
            .array(zod_1.z.string())
            .min(1, { message: 'At least one tag is required' })
            .optional(),
        isPublished: zod_1.z.boolean().optional(),
        isDelete: zod_1.z.boolean().optional(), // Added for updates
    }),
});
exports.DocumentValidations = {
    BlogSchema,
    BlogUpdateSchema,
};
