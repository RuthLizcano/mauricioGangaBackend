import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import todoAccesorio from './routes/accesorio.routes';
import todoElectrodomestico from './routes/electrodomestico.routes';
import todoRopa from './routes/ropa.routes';
import todoTecnologia from './routes/tecnologia.routes';


class Server{
    public app:express.Application;

    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('PORT', process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(compression());
    }

    routes():void{
        this.app.use("/v1/accesorio", todoAccesorio);
        this.app.use("/v1/electrodomestico", todoElectrodomestico );
        this.app.use("/v1/ropa", todoRopa);
        this.app.use("/v1/tecnologia", todoTecnologia);
    }
    public start():void{
        this.app.listen(this.app.get('PORT'), ()=>{
            console.log('Server is listening on port', this.app.get('PORT') );
            
        });
    }
}
export{Server};