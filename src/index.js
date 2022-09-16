import express from "express";
import cors from "cors";
import signinRouter from "./routers/signin.routers.js";
import signupRouter from "./routers/signup.routers.js";


const app = express();
app.use(cors());
app.use(express.json()); 
app.use(signinRouter) 
app.use(signupRouter)



app.listen(process.env.PORT, ()=> { console.log("Server running on port " + process.env.PORT); });
