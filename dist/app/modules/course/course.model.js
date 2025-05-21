"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CourseSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    provider: { type: String, required: true },
    period: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
});
const CourseModule = (0, mongoose_1.model)('Course', CourseSchema);
exports.default = CourseModule;
