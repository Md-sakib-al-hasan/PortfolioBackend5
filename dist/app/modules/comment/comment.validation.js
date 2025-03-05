"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentValiditons = void 0;
const zod_1 = require("zod");
const objectIdRegex = /^[a-fA-F0-9]{24}$/;
const CommentSchema = zod_1.z.object({
    body: zod_1.z.object({
        comment: zod_1.z.string().min(1, 'Name is required'),
        blogid: zod_1.z.string().regex(objectIdRegex, 'Invalid Blog ID'),
    }),
});
exports.CommentValiditons = {
    CommentSchema,
};
