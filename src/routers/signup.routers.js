import express from 'express'
import { signUp } from "../controllers/sign-up.controller.js";
import validateSignUpSchema from "../middlewares/validationSignUp.middleware.js"
const router = express.Router()
router.post("/sign-up", validateSignUpSchema, signUp);

export default router