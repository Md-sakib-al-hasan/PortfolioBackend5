"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const blog_controller_1 = require("./blog.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/create-blog', (0, auth_1.default)(), (0, validateRequest_1.default)(blog_validation_1.BlogValiditons.BlogSchema), blog_controller_1.BlogControllers.createvidoes);
router.patch('/update-blog', (0, auth_1.default)(), (0, validateRequest_1.default)(blog_validation_1.BlogValiditons.BlogUpdaeSchema), blog_controller_1.BlogControllers.Updateupdaeudoes);
router.delete('/delete-blog', (0, auth_1.default)(), blog_controller_1.BlogControllers.Deletesingelvidoe);
router.get('/getsingle-blog', blog_controller_1.BlogControllers.getsinglevideo);
router.get('/get-all-blog', blog_controller_1.BlogControllers.getAllvidoes);
exports.BlogRoutes = router;
