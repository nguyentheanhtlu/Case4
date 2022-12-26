import express from 'express';
import StudentController from '../controller/students.controller'

const routes = express.Router();

const studentControllers = new StudentController();


routes.get('/students',studentControllers.index);
routes.get('/students/add',studentControllers.create);
routes.post('/students/add',studentControllers.AddStudent);
routes.get('/students/update/:id',studentControllers.showUpdateStudent);
routes.post('/students/update/:id',studentControllers.update);
routes.get('/students/:id/delete',studentControllers.delete);


export default routes;