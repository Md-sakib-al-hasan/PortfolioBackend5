"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
});
const MessageModule = (0, mongoose_1.model)('Message', MessageSchema);
exports.default = MessageModule;
