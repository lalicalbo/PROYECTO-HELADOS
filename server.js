//const express= require("express")
//toco comentar porque en la consola se generaba un error 
// de require is not define;y so pasa cuando de trabaja con modulos
//cuando en el paxckage Json se le coloco el type modules 
//esto para que deje trabajar de manera modular
//ahora toca utilizar solo el import


import express from "express";
import { icecreamControllers } from "./controllers/index2.js";

import { heladosRoutes } from "./routes/index.js";
console.log("routes",heladosRoutes);

//create app
const app= express()

// este codigo es para poder ver el post que se realiza en create 
app.use(express.json());

//routes icecream

app.get(heladosRoutes.GET, icecreamControllers.getAll);
app.get(heladosRoutes.GET_ONE, icecreamControllers.getOne);
app.post(heladosRoutes.CREATE, icecreamControllers.create);
app.put(heladosRoutes.UPDATE, icecreamControllers.update);
app.delete(heladosRoutes.DELETE, icecreamControllers.deleteOne);

// routes of sales




//lauch server
app.listen(3004,()=>{
    console.log("initialized server...")
});



