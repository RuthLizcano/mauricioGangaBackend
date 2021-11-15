import {Router, Request, Response} from 'express';
import User from '../Models/Usuarios';

class UsuariosRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }

    public async getTodoUser(req: Request, res:Response): Promise<any>{
        const restarant=await User.find();
        return res.json({ answer: restarant});
    }

    public async postTodoUser(req: Request, res:Response): Promise<any>{
        const {name,email,password}= req.body;
        const newRestaurant= new User({name,email,password});
        await newRestaurant.save();
        return res.json({status:200, desc: 'Guardar'});
    }

    public async putTodoUser(req: Request, res:Response): Promise<any>{
        const restaurant= await User.findOneAndUpdate({_id:req.body._id}, req.body );
        return res.json({status:200, desc: 'Actualizar'});
    }

    routes(){
        this.router.get('/',this.getTodoUser);
        this.router.post('/',this.postTodoUser);
        this.router.put('/',this.putTodoUser);
    }

}

const todoUser=new UsuariosRoutes();
export default todoUser.router;