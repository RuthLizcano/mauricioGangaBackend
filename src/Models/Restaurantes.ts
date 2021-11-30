// @ts-ignore
import {Schema, model} from 'mongoose';

const restaurateSchema=new Schema({
    nombre:{type:String, require:true}, 
    descripcion:{type:String, require:true}, 
    horario:{type:String, require:true}, 
    direccion:{type:String, require:true},  
    comentario:{type:String, require:true}, 
    calificación:{type:Number, require:true},
    url:{type:String, require:true},
    dateAt:{type:Date, default:Date.now},
});

export default model("Restaurantes", restaurateSchema);