// @ts-ignore
import mongoose from 'mongoose';

const Mongo_URL='mongodb+srv://mauricio:1234@mauricio.ooixc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);
mongoose.connect(Mongo_URL || process.env.Mongo_URL,{
    
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopoLogu: true,
    
});

