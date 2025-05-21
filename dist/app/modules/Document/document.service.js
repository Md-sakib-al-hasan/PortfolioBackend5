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
const createDocumentDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newproject = yield docuemnt_model_1.default.create(payload);
    return newproject;
});
const updateDocument = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield docuemnt_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
    });
    if (!project) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This blog not found');
    }
    return project;
});
const getAllDocumentDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const userQeuery = new QueryBuilder_1.default(docuemnt_model_1.default.find(), query)
        .search(['title', 'excerpt', 'category'])
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
const singledeleteDocumentsBD = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield docuemnt_model_1.default.findByIdAndDelete(id);
    if (!reuslt) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This blog Not found');
    }
    return reuslt;
});
exports.DocumentServices = {
    createDocumentDB,
    getAllDocumentDB,
    singleDocumentBD,
    singledeleteDocumentsBD,
    updateDocument,
};
