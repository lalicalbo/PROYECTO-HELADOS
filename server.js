//const express= require("express")
//toco comentar porque en la consola se generaba un error 
// de require is not define;y so pasa cuando de trabaja con modulos
//cuando en el paxckage Json se le coloco el type modules 
//esto para que deje trabajar de manera modular
//ahora toca utilizar solo el import


import express from "express";
import { icecreamControllers, rolCtrl, sellCtrl } from "./controllers/index2.js";

import { heladosRoutes, rolRoutes, sellRouter } from "./routes/index.js";


console.log("routes", heladosRoutes);


//create app
const app = express()

// este codigo es para poder ver el post que se realiza en create 
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Mi api");
});


//link sell router
app.use("/api", sellRouter);

//routes icecream

app.get(heladosRoutes.GET, icecreamControllers.getAll);
app.get(heladosRoutes.GET_ONE, icecreamControllers.getOne);
app.post(heladosRoutes.CREATE, icecreamControllers.create);
app.put(heladosRoutes.UPDATE, icecreamControllers.update);
app.delete(heladosRoutes.DELETE, icecreamControllers.deleteOne);

//routes or rol


app.get(rolRoutes.GET, rolCtrl.getAll);
app.get(rolRoutes.GET_ONE, rolCtrl.getOne);
app.post(rolRoutes.CREATE, rolCtrl.create);
app.put(rolRoutes.UPDATE, rolCtrl.update);
app.delete(rolRoutes.DELETE, rolCtrl.deleteOne);

// routes of sell con app.route

/*
app.route(sellRoutes.SELL).post(sellCtrl.sell);
app.route(sellRoutes.MAIN).get((req,res)=>{
    res.send("main ventas...");
})*/



//lauch server
app.listen(3004, () => {
    console.log("initialized server...")
});



