import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

import homeRouter from "./src/routers/home.routers.js";
import signinRouter from "./src/routers/signin.routers.js";
import signupRouter from "./src/routers/signup.routers.js";
import historyRouter from "./src/routers/history.routers.js";
import cartRouter from "./src/routers/cart.routers.js";

dotenv.config()

const app = express();
 
app.use(cors());
app.use(express.json()); 


app.use(signinRouter);
app.use(signupRouter); 
app.use(historyRouter);
app.use(cartRouter);
app.use(homeRouter);
app.get('/eu', async (req, res) => {
    res.sendStatus(201);
})
  
const port = process.env.PORT || 5000;
 
app.listen(port,
    ()=> { console.log("Server running on port " + port); });

   