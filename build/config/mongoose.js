"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var mongoose_1 = __importDefault(require("mongoose"));
var Mongo_URL = 'mongodb+srv://mauricio:1234@mauricio.ooixc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default.connect(Mongo_URL || process.env.Mongo_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopoLogu: true,
});
