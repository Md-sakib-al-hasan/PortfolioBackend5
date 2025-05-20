"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const document_controller_1 = require("./document.controller");
const router = express_1.default.Router();
// router.post(
//   '/create-blog',
//   validateRequest(BlogValiditons.BlogSchema),
//   BlogControllers.createvidoes,
// );
// router.patch(
//   '/update-blog',
//   validateRequest(BlogValiditons.BlogUpdaeSchema),
//   BlogControllers.Updateupdaeudoes,
// );
// router.delete('/delete-blog', BlogControllers.Deletesingelvidoe);
router.get('/getsingle-blog/:id', document_controller_1.DocumentControllers.getsingleDocument);
router.get('/get-all-blog', document_controller_1.DocumentControllers.getAllDocument);
exports.DocumentRoutes = router;
