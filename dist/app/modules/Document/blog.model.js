"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    readTime: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        name: {
            type: String,
            required: true,
        },
    },
    coverImage: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    isDelete: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const DocumentModule = (0, mongoose_1.model)('document', BlogSchema);
exports.default = DocumentModule;
