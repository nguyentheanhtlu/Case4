import express from 'express';
import EmployeeController from "../controller/employee.controller";

const routes = express.Router();

const employeeControllers = new EmployeeController();


routes.get('/employees',employeeControllers.index);
routes.get('/employees/add',employeeControllers.create);
routes.post('/employees/add',employeeControllers.AddEmployee);
routes.get('/employees/update/:id',employeeControllers.showUpdateEmployee);
routes.post('/employees/update/:id',employeeControllers.update);
routes.get('/employees/:id/delete',employeeControllers.delete);
routes.get('/employees/search/room',employeeControllers.searchBranches)


export default routes;