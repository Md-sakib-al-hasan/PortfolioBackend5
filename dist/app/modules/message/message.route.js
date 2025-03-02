"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const message_validation_1 = require("./message.validation");
const message_controller_1 = require("./message.controller");
const router = express_1.default.Router();
router.post('/create-message', (0, validateRequest_1.default)(message_validation_1.MessageValiditons.MessageSchema), message_controller_1.MessageControllers.createvmessage);
router.get('/get-all-message', message_controller_1.MessageControllers.getAllmessage);
exports.MessageRoutes = router;
