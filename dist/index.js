"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const web_router_1 = __importDefault(require("./src/router/web.router"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.static("./src/public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use("/", web_router_1.default);
app.listen(PORT, () => {
    console.log('server listening on port ' + PORT);
});
//# sourceMappingURL=index.js.map