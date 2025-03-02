"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageValiditons = void 0;
const zod_1 = require("zod");
const MessageSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Name is required'),
        email: zod_1.z.string().email('Invalid email'),
        description: zod_1.z.string().min(1, 'Description is required'),
    }),
});
exports.MessageValiditons = {
    MessageSchema,
};
