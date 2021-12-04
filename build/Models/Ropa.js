"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var mongoose_1 = require("mongoose");
var ropaschema = new mongoose_1.Schema({
    tipo: { type: String, require: true },
    descripcion: { type: String, require: true },
    precio: { type: Number, require: true },
    materiales: { type: String, require: true },
    talla: { type: String, require: true },
    url: { type: String, require: true },
    dateAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("Ropa", ropaschema);
