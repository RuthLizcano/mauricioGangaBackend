// @ts-ignore
import mongoose from 'mongoose';

const Mongo_URL='mongodb+srv://ruth:Pradaruth94.@etitc.xkb88.mongodb.net/myDatabaseRestaurant?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);
mongoose.connect(Mongo_URL || process.env.Mongo_URL,{
    
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopoLogu: true,
    
});

