import express, { Router } from "express";
import { sellCtrl } from "../controllers/index2.js";
const router = express.Router();



const sellRoutes = {
    MAIN: "/sell",
    SELL: "/sell",

};

// define routes and controls to routes
router.get(sellRoutes.MAIN, (req, res) => {
    res.send("manin ventas...");
});
router.post(sellRoutes.SELL, sellCtrl.sell);


export default router;