"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EducationSchema = new mongoose_1.Schema({
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    year: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
});
const EducationModule = (0, mongoose_1.model)('Education', EducationSchema);
exports.default = EducationModule;
