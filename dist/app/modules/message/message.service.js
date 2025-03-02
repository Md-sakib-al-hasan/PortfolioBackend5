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
exports.MessageServices = void 0;
/* eslint-disable no-unused-vars */
const message_model_1 = __importDefault(require("./message.model"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const createmessage = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newproject = yield message_model_1.default.create(payload);
    return newproject;
});
const getAllMessageDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const userQeuery = new QueryBuilder_1.default(message_model_1.default.find(), query)
        .search(['description', 'email', 'name'])
        .filter()
        .sort()
        .paginate();
    const result = yield userQeuery.modelQuery;
    const meta = yield userQeuery.countTotal();
    return { result, meta };
});
exports.MessageServices = {
    createmessage,
    getAllMessageDB,
};
