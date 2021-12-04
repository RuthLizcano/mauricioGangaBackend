// @ts-ignore
import {Schema, model} from 'mongoose';

const tecnologiaschema=new Schema({
    nombre:{type:String, require:true},
    marca:{type:String, require:true}, 
    descripcion:{type:String, require:true}, 
    precio:{type:Number, require:true}, 
    materiales:{type:String, require:true},  
    garantia:{type:String, require:true}, 
    url:{type:String, require:true},
    dateAt:{type:Date, default:Date.now},
});

export default model("Tecnologia", tecnologiaschema);