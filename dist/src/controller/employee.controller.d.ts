declare class employeeController {
    index(req: any, res: any, next: any): Promise<void>;
    create(req: any, res: any): Promise<void>;
    AddEmployee(req: any, res: any): Promise<void>;
    showUpdateEmployee(req: any, res: any): Promise<void>;
    update(req: any, res: any, next: any): Promise<void>;
    delete(req: any, res: any): Promise<void>;
    searchBranches(req: any, res: any): Promise<void>;
}
export default employeeController;
