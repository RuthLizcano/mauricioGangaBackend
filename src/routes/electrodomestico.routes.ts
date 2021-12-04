import {Router, Request, Response} from 'express';
import Electrodomestico from '../Models/Electrodomestico';

class ElectrodomesticoRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }

    public async getTodoElectrodomestico(req: Request, res:Response): Promise<any>{
        const electrodomestico=await Electrodomestico.find();
        return res.json({ answer: electrodomestico});
    }

    public async postTodoElectrodomestico(req: Request, res:Response): Promise<any>{
        const {nombre,marca,descripcion,precio,materiales,garantia,url}= req.body;
        const newElectrodomestico= new Electrodomestico({nombre,marca,descripcion,precio,materiales,garantia,url});
        await newElectrodomestico.save();
        return res.json({status:200, desc: 'Guardar'});
    }

    public async putTodoElectrodomestico(req: Request, res:Response): Promise<any>{
        const electrodomestico= await Electrodomestico.findOneAndUpdate({_id:req.body._id}, req.body );
        return res.json({status:200, desc: 'Actualizar'});
    }
    public async deleteTodoElectrodomestico(req: Request, res:Response): Promise<any>{
        const electrodomestico= await Electrodomestico.findOneAndRemove({_id:req.body._id});
        return res.json({status:200, desc: 'Eliminar'});
    }

    routes(){
        this.router.get('/',this.getTodoElectrodomestico);
        this.router.post('/',this.postTodoElectrodomestico);
        this.router.put('/',this.putTodoElectrodomestico);
        this.router.delete('/',this.deleteTodoElectrodomestico);
    }

}

const todoElectrodomestico=new ElectrodomesticoRoutes();
export default todoElectrodomestico.router;