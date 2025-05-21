"use strict";
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
exports.EducationServices = void 0;
const education_model_1 = __importDefault(require("./education.model"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const createEducation = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const education = yield education_model_1.default.create(payload);
    return education;
});
const getAllEducationsDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const eduQuery = new QueryBuilder_1.default(education_model_1.default.find(), query)
        .search(['degree', 'institution', 'description'])
        .filter()
        .sort()
        .paginate();
    const result = yield eduQuery.modelQuery;
    const meta = yield eduQuery.countTotal();
    return { result, meta };
});
exports.EducationServices = {
    createEducation,
    getAllEducationsDB,
};
