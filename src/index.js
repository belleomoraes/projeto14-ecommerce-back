import express from "express";
import cors from "cors";
import signinRouter from "./routers/signin.routers.js";
import signupRouter from "./routers/signup.routers.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(signinRouter)
app.use(signupRouter)



app.listen(5000, () => console.log("Listening on port 5000"));
