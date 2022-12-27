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
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const posts_1 = __importDefault(require("./routes/posts"));
const users_1 = __importDefault(require("./routes/users"));
const path_1 = __importDefault(require("path"));
class App {
    constructor(p) {
        this.app = (0, express_1.default)();
        this.port = p;
        this.funcionalitys();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    funcionalitys() {
        this.app.use("/", express_1.default.static(path_1.default.join(__dirname, "../../my-app")));
        this.app.use(function (inRequest, inResponse, inNext) {
            inResponse.header("Access-Control-Allow-Origin", "*");
            inResponse.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS ");
            inResponse.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
            inNext();
        });
    }
    routes() {
        this.app.use('/posts', posts_1.default);
        this.app.use('/users', users_1.default);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.port);
            console.log('Server na porta', this.port);
        });
    }
}
exports.App = App;
