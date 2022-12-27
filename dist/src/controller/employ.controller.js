"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const class_1 = __importDefault(require("../models/class"));
class StudentController {
    async index(req, res, next) {
        try {
            let student = await user_1.default.find().populate('class');
            res.render('list', {
                data: student
            });
        }
        catch (err) {
            next(err);
        }
    }
    async create(req, res) {
        let clasStudent = await class_1.default.find();
        res.render('add', {
            data: clasStudent
        });
    }
    async AddStudent(req, res) {
        try {
            console.log(req.body);
            await user_1.default.create({
                name: req.body.name,
                class: req.body.class,
                theoreticalScore: req.body.theoreticalScore,
                practicePoints: req.body.practicePoints,
                evaluate: req.body.evaluate,
                describe: req.body.describe,
            });
            res.redirect('/students');
        }
        catch (err) {
            res.redirect('/students/add');
        }
    }
    async showUpdateStudent(req, res) {
        const student = await user_1.default.findOne({ _id: req.params.id });
        const classStudents = await class_1.default.find();
        res.render("update", { data: student, classStudents: classStudents });
    }
    async update(req, res, next) {
        try {
            const student = await user_1.default.findOne({ _id: req.params.id });
            console.log(student);
            student.name = req.body.name;
            student.class = req.body.class;
            student.theoreticalScore = req.body.theoreticalScore;
            student.practicePoints = req.body.practicePoints;
            student.evaluate = req.body.evaluate;
            student.describe = req.body.describe;
            await student.save();
            res.redirect('/students');
        }
        catch (err) {
            next(err);
        }
    }
    async delete(req, res) {
        let id = req.params.id;
        await user_1.default.deleteOne({ _id: id });
        res.redirect('/students');
    }
}
exports.default = StudentController;
//# sourceMappingURL=employ.controller.js.map