"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const document_controller_1 = require("./document.controller");
const document_validation_1 = require("./document.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.post('/create-blog', (0, validateRequest_1.default)(document_validation_1.DocumentValidations.BlogSchema), document_controller_1.DocumentControllers.createDocuments);
router.patch('/update-blog/:id', (0, validateRequest_1.default)(document_validation_1.DocumentValidations.BlogUpdateSchema), document_controller_1.DocumentControllers.UpdateDcoment);
router.delete('/delete-blog/:id', document_controller_1.DocumentControllers.DeletesingelDocument);
router.get('/getsingle-blog/:id', document_controller_1.DocumentControllers.getsingleDocument);
router.get('/get-all-blog', document_controller_1.DocumentControllers.getAllDocument);
exports.DocumentRoutes = router;
