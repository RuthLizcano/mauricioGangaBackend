import {Router, Request, Response} from 'express';
import Accesorio from '../Models/Accesorio';

class AccesoriosRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }

    public async getTodoAccesorio(req: Request, res:Response): Promise<any>{
        const acc=await Accesorio.find();
        return res.json({ answer: acc});
    }

    public async postTodoAccesorio(req: Request, res:Response): Promise<any>{
        const {nombre,descripcion,precio,materiales,garantia,url}= req.body;
        const newAccesorio= new Accesorio({nombre,descripcion,precio,materiales,garantia,url});
        await newAccesorio.save();
        return res.json({status:200, desc: 'Guardar'});
    }
    public async putTodoAccesorio(req: Request, res:Response): Promise<any>{
        const accesorio= await Accesorio.findOneAndUpdate({_id:req.body._id}, req.body );
        return res.json({status:200, desc: 'Actualizar'});
    }
    public async deleteTodoAccesorio(req: Request, res:Response): Promise<any>{
        const accesorio= await Accesorio.findOneAndRemove({_id:req.body._id});
        return res.json({status:200, desc: 'Eliminar'});
    }

    routes(){
        this.router.get('/',this.getTodoAccesorio);
        this.router.post('/',this.postTodoAccesorio);
        this.router.put('/',this.putTodoAccesorio);
        this.router.delete('/',this.deleteTodoAccesorio);
    }

}

const todoAccesorio=new AccesoriosRoutes();
export default todoAccesorio.router;