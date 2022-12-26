declare class StudentController {
    index(req: any, res: any, next: any): Promise<void>;
    create(req: any, res: any): Promise<void>;
    AddStudent(req: any, res: any): Promise<void>;
    showUpdateStudent(req: any, res: any): Promise<void>;
    update(req: any, res: any, next: any): Promise<void>;
    delete(req: any, res: any): Promise<void>;
}
export default StudentController;
