"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const education_validation_1 = require("./education.validation");
const education_controller_1 = require("./education.controller");
const router = express_1.default.Router();
router.post('/create-education', (0, validateRequest_1.default)(education_validation_1.EducationValidations.EducationSchema), education_controller_1.EducationControllers.createEducation);
router.get('/get-all-educations', education_controller_1.EducationControllers.getAllEducations);
exports.EducationRoutes = router;
