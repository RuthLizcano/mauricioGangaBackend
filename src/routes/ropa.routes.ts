import {Router, Request, Response} from 'express';
import Ropa from '../Models/Ropa';

class RopaRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }

    public async getTodoRopa(req: Request, res:Response): Promise<any>{
        const ropa=await Ropa.find();
        return res.json({ answer: ropa});
    }

    public async postTodoRopa(req: Request, res:Response): Promise<any>{
        const {tipo,descripcion,precio,materiales,talla,url}= req.body;
        const newRopa= new Ropa({tipo,descripcion,precio,materiales,talla,url});
        await newRopa.save();
        return res.json({status:200, desc: 'Guardar'});
    }

    public async putTodoRopa(req: Request, res:Response): Promise<any>{
        const ropa= await Ropa.findOneAndUpdate({_id:req.body._id}, req.body );
        return res.json({status:200, desc: 'Actualizar'});
    }
    public async deleteTodoRopa(req: Request, res:Response): Promise<any>{
        const ropa= await Ropa.findOneAndRemove({_id:req.body._id});
        return res.json({status:200, desc: 'Eliminar'});
    }

    routes(){
        this.router.get('/',this.getTodoRopa);
        this.router.post('/',this.postTodoRopa);
        this.router.put('/',this.putTodoRopa);
        this.router.delete('/',this.deleteTodoRopa);
    }

}

const todoRopa=new RopaRoutes();
export default todoRopa.router;