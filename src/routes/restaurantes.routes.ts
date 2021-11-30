import {Router, Request, Response} from 'express';
import Restaurantes from '../Models/Restaurantes';

class RestarurantesRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }

    public async getTodoRestaurante(req: Request, res:Response): Promise<any>{
        const restarant=await Restaurantes.find();
        return res.json({ answer: restarant});
    }

    public async postTodoRestaurante(req: Request, res:Response): Promise<any>{
        const {nombre,descripcion,horario,direccion,comentario,calificación,url}= req.body;
        const newRestaurant= new Restaurantes({nombre,descripcion,horario,direccion,comentario,calificación,url});
        await newRestaurant.save();
        return res.json({status:200, desc: 'Guardar'});
    }

    public async putTodoRestaurante(req: Request, res:Response): Promise<any>{
        const restaurant= await Restaurantes.findOneAndUpdate({_id:req.body._id}, req.body );
        return res.json({status:200, desc: 'Actualizar'});
    }
    public async deleteTodoRestaurante(req: Request, res:Response): Promise<any>{
        const restaurant= await Restaurantes.findOneAndRemove({_id:req.body._id});
        return res.json({status:200, desc: 'Eliminar'});
    }

    routes(){
        this.router.get('/',this.getTodoRestaurante);
        this.router.post('/',this.postTodoRestaurante);
        this.router.put('/',this.putTodoRestaurante);
        this.router.delete('/',this.deleteTodoRestaurante);
    }

}

const todoRestaurante=new RestarurantesRoutes();
export default todoRestaurante.router;