import {Router, Request, Response} from 'express';
import Plato from '../Models/Platos';

class PlatosRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }

    public async getTodoPlato(req: Request, res:Response): Promise<any>{
        const restarant=await Plato.find();
        return res.json({ answer: restarant});
    }

    public async postTodoPlato(req: Request, res:Response): Promise<any>{
        const {nombre,descripcion,precio,nombreRest,comentario,calificación}= req.body;
        const newRestaurant= new Plato({nombre,descripcion,precio,nombreRest,comentario,calificación});
        await newRestaurant.save();
        return res.json({status:200, desc: 'Guardar'});
    }

    public async putTodoPlato(req: Request, res:Response): Promise<any>{
        const restaurant= await Plato.findOneAndUpdate({_id:req.body._id}, req.body );
        return res.json({status:200, desc: 'Actualizar'});
    }
    public async deleteTodoPlato(req: Request, res:Response): Promise<any>{
        const restaurant= await Plato.findOneAndRemove({_id:req.body._id});
        return res.json({status:200, desc: 'Eliminar'});
    }

    routes(){
        this.router.get('/',this.getTodoPlato);
        this.router.post('/',this.postTodoPlato);
        this.router.put('/',this.putTodoPlato);
        this.router.delete('/',this.deleteTodoPlato);
    }

}

const todoPlatos=new PlatosRoutes();
export default todoPlatos.router;