"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Main schema for TProject
const BlogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgurl: {
        type: String,
        required: true,
    },
    videourl: {
        type: String,
        required: true,
    },
    isDelete: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const BlogModule = (0, mongoose_1.model)('Blog', BlogSchema);
exports.default = BlogModule;
