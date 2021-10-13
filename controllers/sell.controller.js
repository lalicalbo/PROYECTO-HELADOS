import { Helados, Sells, SoldIcecreams } from "../models/index3.js";

import db from "../dataBase.js";



export const sell = (req, res) => {
    console.log("BODY ", req.body);
    const { id, cantidad_comprar: quantity } = req.body;

    db.connect();

    //find icecream to sell
    Helados.findById(id, (err, data) => {

        if (data) {
            if(err) res.status(204).send("No existe el helado a vender");
            const { precio: price } = data
            const priceToSell = quantity * price

            //create a sell
            const sell = new Sells({
                fecha: Date.now(),
                valor: priceToSell,
            });
            sell.save((err, value) => {
               if (err)res.status(500).send(err);
                //if created sell
                if (value) {
                    //Create detail of sell
                    const { _id: idSell } = value;
                    console.log("ID VENTA", idSell);

                    //

                    SoldIcecreams.create(
                        {
                            cantidad: quantity,
                            id_helado: id,
                            id_venta: idSell,
                            precio: priceToSell,
                        },
                        (err, data) => {
                            console.log("helado creado", data);
                            if (data) res.status(200).json({ ok: true });
                            else {
                                //revert sell
                                value.remove((err, sellRemoved)=>{
                                    if(sellRemoved)res.status(500).send("Hubo un error al crear la venta")

                                })
                                res.status(500).send(err)
                            }
                        }
                    );
                }
            });
        }
    });
};

