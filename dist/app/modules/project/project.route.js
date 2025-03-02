"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const project_validation_1 = require("./project.validation");
const project_controller_1 = require("./project.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/create-project', (0, auth_1.default)(), (0, validateRequest_1.default)(project_validation_1.ProjectValiditons.ProjectSchema), project_controller_1.ProjectControllers.createProject);
router.patch('/update-project', (0, auth_1.default)(), (0, validateRequest_1.default)(project_validation_1.ProjectValiditons.ProjectUpdateSchema), project_controller_1.ProjectControllers.UpdateProject);
router.delete('/delete-project', (0, auth_1.default)(), project_controller_1.ProjectControllers.Deletesingelproject);
router.get('/getsingle-project', project_controller_1.ProjectControllers.getsingleproject);
router.get('/get-all-project', project_controller_1.ProjectControllers.getAllPrject);
exports.projectRoutes = router;
