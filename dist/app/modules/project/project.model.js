"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Schema for allarrayobject type
const AllArrayObjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});
// Main schema for TProject
const ProjectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    status: {
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
    frontendLiveLink: {
        type: String,
        required: true,
    },
    frontendSourceLink: {
        type: String,
        required: true,
    },
    backendLiveLink: {
        type: String,
        required: false,
    },
    backendSourceLink: {
        type: String,
        required: false,
    },
    specialFeatured: {
        type: [AllArrayObjectSchema],
        required: true,
    },
    Technologies: {
        type: [AllArrayObjectSchema],
        required: true,
    },
    featured: {
        type: [AllArrayObjectSchema],
        required: true,
    },
    isDelete: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const Project = (0, mongoose_1.model)('Project', ProjectSchema);
exports.default = Project;
