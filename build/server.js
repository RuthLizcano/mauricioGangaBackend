"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var compression_1 = __importDefault(require("compression"));
var accesorio_routes_1 = __importDefault(require("./routes/accesorio.routes"));
var electrodomestico_routes_1 = __importDefault(require("./routes/electrodomestico.routes"));
var ropa_routes_1 = __importDefault(require("./routes/ropa.routes"));
var tecnologia_routes_1 = __importDefault(require("./routes/tecnologia.routes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('PORT', process.env.PORT || 4000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use((0, compression_1.default)());
    };
    Server.prototype.routes = function () {
        this.app.use("/v1/accesorio", accesorio_routes_1.default);
        this.app.use("/v1/electrodomestico", electrodomestico_routes_1.default);
        this.app.use("/v1/ropa", ropa_routes_1.default);
        this.app.use("/v1/tecnologia", tecnologia_routes_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('PORT'), function () {
            console.log('Server is listening on port', _this.app.get('PORT'));
        });
    };
    return Server;
}());
exports.Server = Server;
