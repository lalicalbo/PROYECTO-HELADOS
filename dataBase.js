//let mongoose = require("mongoose");


import mongoose from "mongoose";

const db = {
    connect: function () {

        //mongoose.connect('mongodb://localhost:27017/proyectoHelados', {    *****ASI SE CONECTA AL LOCALHOST
        mongoose.connect(
            'mongodb+srv://lalicalbo:Maruchos123@cluster0.u6quw.mongodb.net/test',
            {
                useNewUrlParser: true
            });

        mongoose.connection.on("error", function (e) {
            console.error(e);
        });
    },
};

export default db;