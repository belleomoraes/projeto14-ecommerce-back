import express from 'express'
import { GetDb } from "../controllers/home.controller.js";

const router = express.Router()
router.get("/",GetDb);

export default router;