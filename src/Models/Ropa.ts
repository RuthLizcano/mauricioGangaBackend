// @ts-ignore
import {Schema, model} from 'mongoose';

const ropaschema=new Schema({
    tipo:{type:String, require:true}, 
    descripcion:{type:String, require:true}, 
    precio:{type:Number, require:true}, 
    materiales:{type:String, require:true},  
    talla:{type:String, require:true}, 
    url:{type:String, require:true},
    dateAt:{type:Date, default:Date.now},
});

export default model("Ropa", ropaschema);