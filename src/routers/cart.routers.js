import express from 'express'
import { AddCart } from "../controllers/cart.controller.js";

const router = express.Router()
router.post("/cart",  AddCart);

export default router;