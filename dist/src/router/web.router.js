"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const students_controller_1 = __importDefault(require("../controller/students.controller"));
const routes = express_1.default.Router();
const studentControllers = new students_controller_1.default();
routes.get('/students', studentControllers.index);
routes.get('/students/add', studentControllers.create);
routes.post('/students/add', studentControllers.AddStudent);
routes.get('/students/update/:id', studentControllers.showUpdateStudent);
routes.post('/students/update/:id', studentControllers.update);
routes.get('/students/:id/delete', studentControllers.delete);
exports.default = routes;
//# sourceMappingURL=web.router.js.map