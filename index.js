import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import signinRouter from "./src/routers/signin.routers.js";
import signupRouter from "./src/routers/signup.routers.js";

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(signinRouter);
app.use(signupRouter);
 


app.listen(process.env.PORT, 
    ()=> { console.log("Server running on port " + process.env.PORT); });
 