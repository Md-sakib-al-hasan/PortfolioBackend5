"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationValidations = void 0;
const zod_1 = require("zod");
const EducationSchema = zod_1.z.object({
    body: zod_1.z.object({
        degree: zod_1.z.string().min(1, 'Degree is required'),
        institution: zod_1.z.string().min(1, 'Institution is required'),
        year: zod_1.z.string().min(1, 'Year is required'),
        description: zod_1.z.string().min(1, 'Description is required'),
    }),
});
exports.EducationValidations = {
    EducationSchema,
};
