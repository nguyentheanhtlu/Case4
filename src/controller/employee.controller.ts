import UserModel from '../models/user';
import Branch from '../models/branch';

class employeeController {
    async index(req: any, res: any, next) {
        try {
            let employee = await UserModel.find().populate('branch').sort({age:1});
            let branch = await Branch.find();
            console.log(employee)
            res.render('list', {
                data: employee, rooms : branch
            })
        } catch (err) {
            next(err);
        }
    }

    async create(req: any, res: any) {
        let branch = await Branch.find();
        res.render('add', {
            data: branch
        });
    }

    async AddEmployee(req: any, res: any) {
        try {
            console.log(req.body)
            await UserModel.create({
                employeeCode: req.body.employeeCode,
                name: req.body.name,
                age: req.body.age,
                salary: req.body.salary,
                branch: req.body.branch,

            })
            res.redirect('/employees');
        } catch (err) {
            res.redirect('/employees/add');
        }
    }

    async showUpdateEmployee(req: any, res: any) {
        const employees = await UserModel.findOne({_id: req.params.id});
        const branch = await Branch.find();
        res.render("update", {data: employees, branch: branch});

    }

    async update(req: any, res: any, next) {
        try {
            const employee = await UserModel.findOne({_id: req.params.id});
            console.log(employee);
            employee.employeeCode = req.body.employeeCode;
            employee.name = req.body.name;
            employee.age = req.body.age;
            employee.salary = req.body.salary;
            employee.branch = req.body.branch;
            await employee.save();
            res.redirect('/employees')

        } catch (err) {
            next(err);

        }
    }

    async delete(req: any, res: any) {

        let id = req.params.id;
        await UserModel.deleteOne({_id: id},)
        res.redirect('/employees');
    }
    async searchBranches(req: any, res: any) {
        const roomId = req.query.roomId;
        console.log(roomId)
        let query = {};
        if (roomId !== 'All Rooms') {
            query = {
                branch: roomId
            }
        }
        const employees = await UserModel.find(query).populate('branch');
        console.log(employees)
        res.status(200).json(employees);
    }
}


export default employeeController;