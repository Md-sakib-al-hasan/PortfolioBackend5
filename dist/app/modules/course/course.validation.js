"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseValidations = void 0;
const zod_1 = require("zod");
const CourseSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Name is required'),
        provider: zod_1.z.string().min(1, 'Provider is required'),
        period: zod_1.z.string().min(1, 'Period is required'),
        description: zod_1.z.string().min(1, 'Description is required'),
    }),
});
exports.CourseValidations = {
    CourseSchema,
};
