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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const project_model_1 = __importDefault(require("./project.model"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const createprojectDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newproject = yield project_model_1.default.create(payload);
    return newproject;
});
const updateproject = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { featured, Technologies, specialFeatured } = payload, nomaldata = __rest(payload, ["featured", "Technologies", "specialFeatured"]);
    const project = yield project_model_1.default.findByIdAndUpdate(id, nomaldata, {
        new: true,
    });
    if (!project) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This Project not found');
    }
    if (featured) {
        for (let i = 0; i < featured.length; i++) {
            project.featured.push(featured[i]);
        }
    }
    if (Technologies) {
        for (let i = 0; i < Technologies.length; i++) {
            project.Technologies.push(Technologies[i]);
        }
    }
    if (specialFeatured) {
        for (let i = 0; i < specialFeatured.length; i++) {
            project.specialFeatured.push(specialFeatured[i]);
        }
    }
    const newupdate = yield project_model_1.default.findByIdAndUpdate(id, project, {
        new: true,
    });
    return newupdate;
});
const getAllporjectDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const userQeuery = new QueryBuilder_1.default(project_model_1.default.find({ isDelete: false }), query)
        .search(['status', 'details', 'description', 'title'])
        .filter()
        .sort()
        .paginate();
    const result = yield userQeuery.modelQuery;
    const meta = yield userQeuery.countTotal();
    return { result, meta };
});
const singleprojectBD = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield project_model_1.default.findOne({ _id: id, isDelete: false });
    if (!reuslt) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This user Not found');
    }
    return reuslt;
});
const singledeleteprojectBD = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield project_model_1.default.findByIdAndUpdate(id, { isDelete: true }, { new: true });
    if (!reuslt) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This user Not found');
    }
    return reuslt;
});
exports.ProjectServices = {
    createprojectDB,
    updateproject,
    singleprojectBD,
    getAllporjectDB,
    singledeleteprojectBD,
};
