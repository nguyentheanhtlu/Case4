"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_controller_1 = __importDefault(require("../controller/employee.controller"));
const routes = express_1.default.Router();
const employeeControllers = new employee_controller_1.default();
routes.get('/employees', employeeControllers.index);
routes.get('/employees/add', employeeControllers.create);
routes.post('/employees/add', employeeControllers.AddEmployee);
routes.get('/employees/update/:id', employeeControllers.showUpdateEmployee);
routes.post('/employees/update/:id', employeeControllers.update);
routes.get('/employees/:id/delete', employeeControllers.delete);
routes.get('/employees/search/room', employeeControllers.searchBranches);
exports.default = routes;
//# sourceMappingURL=web.router.js.map