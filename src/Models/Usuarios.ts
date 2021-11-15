// @ts-ignore
import {Schema, model} from 'mongoose';

const usuarioSchema=new Schema({
    name:{type:String, require:true}, 
    email:{type:String, require:true}, 
    password:{type:String, require:true}, 
});

export default model("User", usuarioSchema);