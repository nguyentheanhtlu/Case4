"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const branch_1 = __importDefault(require("../models/branch"));
class employeeController {
    async index(req, res, next) {
        try {
            let employee = await user_1.default.find().populate('branch').sort({ age: 1 });
            let branch = await branch_1.default.find();
            console.log(employee);
            res.render('list', {
                data: employee, rooms: branch
            });
        }
        catch (err) {
            next(err);
        }
    }
    async create(req, res) {
        let branch = await branch_1.default.find();
        res.render('add', {
            data: branch
        });
    }
    async AddEmployee(req, res) {
        try {
            console.log(req.body);
            await user_1.default.create({
                employeeCode: req.body.employeeCode,
                name: req.body.name,
                age: req.body.age,
                salary: req.body.salary,
                branch: req.body.branch,
            });
            res.redirect('/employees');
        }
        catch (err) {
            res.redirect('/employees/add');
        }
    }
    async showUpdateEmployee(req, res) {
        const employees = await user_1.default.findOne({ _id: req.params.id });
        const branch = await branch_1.default.find();
        res.render("update", { data: employees, branch: branch });
    }
    async update(req, res, next) {
        try {
            const employee = await user_1.default.findOne({ _id: req.params.id });
            console.log(employee);
            employee.employeeCode = req.body.employeeCode;
            employee.name = req.body.name;
            employee.age = req.body.age;
            employee.salary = req.body.salary;
            employee.branch = req.body.branch;
            await employee.save();
            res.redirect('/employees');
        }
        catch (err) {
            next(err);
        }
    }
    async delete(req, res) {
        let id = req.params.id;
        await user_1.default.deleteOne({ _id: id });
        res.redirect('/employees');
    }
    async searchBranches(req, res) {
        const roomId = req.query.roomId;
        console.log(roomId);
        let query = {};
        if (roomId !== 'All Rooms') {
            query = {
                branch: roomId
            };
        }
        const employees = await user_1.default.find(query).populate('branch');
        console.log(employees);
        res.status(200).json(employees);
    }
}
exports.default = employeeController;
//# sourceMappingURL=employee.controller.js.map