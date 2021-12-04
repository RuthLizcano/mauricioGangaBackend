import {Router, Request, Response} from 'express';
import Tecnologia from '../Models/Tecnologia';

class TecnologiaRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }

    public async getTodoTecnologia(req: Request, res:Response): Promise<any>{
        const tecnologia=await Tecnologia.find();
        return res.json({ answer: tecnologia});
    }

    public async postTodoTecnologia(req: Request, res:Response): Promise<any>{
        const {nombre,marca,descripcion,precio,materiales,garantia,url}= req.body;
        const newTecnologia= new Tecnologia({nombre,marca,descripcion,precio,materiales,garantia,url});
        await newTecnologia.save();
        return res.json({status:200, desc: 'Guardar'});
    }
    public async putTodoTecnologia(req: Request, res:Response): Promise<any>{
        const tecnologia= await Tecnologia.findOneAndUpdate({_id:req.body._id}, req.body );
        return res.json({status:200, desc: 'Actualizar'});
    }
    public async deleteTodoTecnologia(req: Request, res:Response): Promise<any>{
        const tecnologia= await Tecnologia.findOneAndRemove({_id:req.body._id});
        return res.json({status:200, desc: 'Eliminar'});
    }

    routes(){
        this.router.get('/',this.getTodoTecnologia);
        this.router.post('/',this.postTodoTecnologia);
        this.router.put('/',this.putTodoTecnologia);
        this.router.delete('/',this.deleteTodoTecnologia);
    }

}

const todoTecnologia=new TecnologiaRoutes();
export default todoTecnologia.router;