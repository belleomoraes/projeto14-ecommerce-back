import express from 'express'
import { AddCart } from "../controllers/cart.controller.js";
import validateCartSchema from "../middlewares/validationCart.middleware.js"

const router = express.Router()
router.post("/cart", validateCartSchema,  AddCart);

export default router;