
import mongoose  from "mongoose";

import db from "../dataBase.js";

import { Helados } from "../models/index3.js";


export const getAll=(req ,res)=>{
    //connect to db
    db.connect();

    //get all icrecream
    Helados.find((err,data)=>{
        if(err) res.status(500).send();
        if (data.length===0)res.status(204).send();
       // se puede asi.... res.json(data) o res.send(data);
       res.status(200).send(data);

    });   
};


//get one icecream

export const getOne =(req,res)=>{
     //connect to db
     db.connect();
    //res.send(`/getOne Icecream`);
    //console.log("req",req);
    //const id= req.params.id;
    //con destructuring
    const {id}= req.params;
    //console.log("ID",id);

    Helados.findById(id ,(err,data)=>{
       // if(err)console.log(err);
       if (err) res.sendStatus(404);
       res.status(200).json(data);
         //console.log("Helado",data)
    });
};


export const create =(req,res)=>{
    console.log("create...");
    console.log("BODY",req.body);
    db.connect();
   
    if(req.body){
        Helados.create(req.body,(err,icecream)=>{
            if (err) res.sendStatus(500)
            res.status(201).json(icecream);

        });
    }
    //res.send("hola Laura");
}


export const update=(req,res)=>{
    const {id}= req.params;
    const icecreamNew=req.body;

    db.connect();
    Helados.findById(id,(err,icecream)=>{
        if(err) res.status(500).send(err);
        Helados.updateOne(icecream,icecreamNew,(err,value)=>{
            
            if(err) res.status(500).send(err);
            res.status(200).send(value);

        });   
    });
};

export const deleteOne=(req,res)=>{
    const {id}= req.params;

    db.connect();
    Helados.findById(id,(err,icecream)=>{
        if (err)res.status(404).send(err);
        icecream.remove((err,value)=>{
            if (err) res.status(500).send(err);
            res.send(value);

        });
    });   
};