"use strict";
/* eslint-disable no-unused-vars */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const docuemnt_model_1 = __importDefault(require("./docuemnt.model"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
// const createVideoDB = async (payload: TBlog) => {
//   const newproject = await BlogModule.create(payload);
//   return newproject;
// };
// const updatevideo = async (payload: Partial<TBlog>, id: string) => {
//   const project = await BlogModule.findByIdAndUpdate(id, payload, {
//     new: true,
//   });
//   if (!project) {
//     throw new AppError(status.NOT_FOUND, 'This blog not found');
//   }
//   return project;
// };
const getAllDocumentDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const userQeuery = new QueryBuilder_1.default(docuemnt_model_1.default.find(), query)
        .search([])
        .filter()
        .sort()
        .paginate();
    const result = yield userQeuery.modelQuery;
    const meta = yield userQeuery.countTotal();
    return { result, meta };
});
const singleDocumentBD = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield docuemnt_model_1.default.findById(id);
    if (!reuslt) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This blog Not found');
    }
    return reuslt;
});
// const singledeleteBlogBD = async (id: string) => {
//   const reuslt = await DocumentModule.findByIdAndUpdate(
//     id,
//     { isDelete: true },
//     { new: true },
//   );
//   if (!reuslt) {
//     throw new AppError(status.NOT_FOUND, 'This blog Not found');
//   }
//   return reuslt;
// };
exports.DocumentServices = {
    getAllDocumentDB,
    singleDocumentBD,
};
