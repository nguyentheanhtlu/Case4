import UserModel from '../models/user';
import ClassModel from '../models/class';

class StudentController{
    async index(req : any ,res : any,next) {
        try {
            let student = await UserModel.find().populate('class');
            res.render('list',{
                data: student
            })
        }
        catch (err){
            next(err);
        }
    }

    async create(req : any ,res : any){
        let clasStudent = await ClassModel.find();
        res.render('add',{
            data: clasStudent
        });
    }

    async AddStudent(req : any ,res : any){
        try{
            console.log(req.body)
         await UserModel.create({
             name : req.body.name,
             class : req.body.class,
             theoreticalScore : req.body.theoreticalScore,
             practicePoints : req.body.practicePoints,
             evaluate : req.body.evaluate,
             describe : req.body.describe,

         })
            res.redirect('/students');
        }
        catch (err){
            res.redirect('/students/add');
        }
    }
    async showUpdateStudent(req : any ,res : any){
        const student = await UserModel.findOne({_id: req.params.id});
        const classStudents = await ClassModel.find();
        res.render("update", {data: student ,classStudents:classStudents});

    }
    async update(req: any,res : any,next) {
        try{
            const student = await UserModel.findOne( {_id : req.params.id});
            console.log(student);
            student.name = req.body.name;
            student.class = req.body.class;
            student.theoreticalScore = req.body.theoreticalScore;
            student.practicePoints = req.body.practicePoints;
            student.evaluate = req.body.evaluate;
            student.describe = req.body.describe;
            await student.save();
            res.redirect('/students')

        }
        catch(err){
            next(err);

        }
    }
    async delete(req : any,res : any){

        let id = req.params.id;
        await UserModel.deleteOne({_id : id},)
        res.redirect('/students');
    }
}





export default StudentController;