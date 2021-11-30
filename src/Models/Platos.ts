// @ts-ignore
import {Schema, model} from 'mongoose';

const platoschema=new Schema({
    nombre:{type:String, require:true}, 
    descripcion:{type:String, require:true}, 
    precio:{type:Number, require:true}, 
    nombreRest:{type:String, require:true},  
    comentario:{type:String, require:true}, 
    calificación:{type:Number, require:true},
    url:{type:String, require:true},
    dateAt:{type:Date, default:Date.now},
});

export default model("Plato", platoschema);