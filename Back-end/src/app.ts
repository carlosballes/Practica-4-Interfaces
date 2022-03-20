import express, { Router } from 'express';
import { connectDB } from "./mongo";
import controller from './resolvers';
import { Collection, Db, MongoClient, ObjectId} from "mongodb";
import bodyParser from 'body-parser';
const uri = "mongodb+srv://Carlos:pipo@cluster0.ueeyw.mongodb.net/Carlos?retryWrites=true&w=majority";
var cors = require('cors')
const run = async() =>{
   
    const db: Db = await connectDB();
    const router = express();
    router.use(cors())
    router.use(bodyParser.json())
    router.set("db",db)
    router.get('/posts', controller.status);
    router.post('/formulario', controller.registrar);
    router.delete('/formulario/:id', controller.borrar);
    router.get('/formulario', controller.mostrar);
    router.post('/actualizar/:id', controller.actualizar);
    await router.listen(6000);
};
try{
    run();
}catch(e){
    console.error(e);
}