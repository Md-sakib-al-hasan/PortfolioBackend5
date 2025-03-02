"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    comment: { type: String, required: true },
}, {
    timestamps: true,
});
const CommentModule = (0, mongoose_1.model)('commnet', CommentSchema);
exports.default = CommentModule;
