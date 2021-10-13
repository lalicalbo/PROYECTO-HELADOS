import express from "express";
import { icecreamControllers,sellCtrl } from "../controllers/index2.js";
const router = express.Router();



const sellRoutes = {
    MAIN: "/sell",
    SELL: "/sell",
    SELL_MW:"/sell/mw/"

    

};

// define routes and controls to routes
router.get(sellRoutes.MAIN, (req, res) => {
    res.send("manin ventas...");
});
router.post(sellRoutes.SELL, sellCtrl.sell);
router.post(sellRoutes.SELL_MW, icecreamControllers.findOne,//paso 1 Encontrar helado
    sellCtrl.createSell, //paso 2 crear venta
    sellCtrl.sellMw);

    //step 3 ::create sell detail PTE REALIZARLO


export default router;