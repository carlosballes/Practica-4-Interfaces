import { Request, Response, NextFunction } from 'express';
import { Db, ObjectId } from "mongodb";
import { Persona } from './types';
import dotenv from "dotenv";
dotenv.config()


const status = async (req: Request, res: Response) => {
    try{
        return res.status(200).json({
            message : "OKProgramacion-I"
        })
        }catch(e){
            return res.status(500).json({
                message : "Error"
            })
        }
};


const registrar = async( req:Request, res:Response, next:NextFunction)=>{
    let body = req.body
    const db:Db =req.app.get("db")   
    const collection = db.collection(process.env.TABLE||"");   
    collection.insertOne(body)
        return res.status(200).json({
            message : "Añadido"
        });
   
};

const mostrar = async( req:Request, res:Response, next:NextFunction)=>{
    const db:Db =req.app.get("db")   
    const collection = db.collection(process.env.TABLE||"");   
    const personaje = await collection.find({}).toArray();
    res.json(personaje);  
};

const borrar = async( req:Request, res:Response, next:NextFunction)=>{
    const db:Db =req.app.get("db")   
    const collection = db.collection(process.env.TABLE||"");     
    const id = new ObjectId(req.params.id)
    const personaje = await collection.find({_id:id}).toArray();  
        if(personaje!=null){
            await collection.deleteOne({_id:id});
            return res.status(200).json({
                message : "Usuario borrado"
            });
        }else{
            return res.status(404).json({
                message : "Not found"
            });  
        }  
};


const actualizar = async( req:Request, res:Response, next:NextFunction)=>{
    const db:Db =req.app.get("db")   
    const collection = db.collection(process.env.TABLE||"");
    const id = new ObjectId(req.params.id)      
    const personaje = await collection.findOne({_id:id});      
        if(personaje!=null){
            await collection.updateOne({_id:id},{$set:{nombre:req.body.nombre, apellido:req.body.apellido, mail:req.body.mail}})
            return res.status(200).json({
                message : "Usuario Actualizado"
            });
        }else{
            return res.status(404).json({
                message : "Not found"
            });  
        }  
};

export default {status,registrar,mostrar,borrar,actualizar}