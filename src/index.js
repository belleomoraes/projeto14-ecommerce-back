import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import signinRouter from "./routers/signin.routers.js";
import signupRouter from "./routers/signup.routers.js";

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json()); 

app.use(signinRouter);
app.use(signupRouter); 
  
const port = process.env.PORT || 5000;
 
app.listen(port,
    ()=> { console.log("Server running on port " + port); });

