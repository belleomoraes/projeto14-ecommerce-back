import joi from "joi";
import db from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

async function signIn(req, res) {
  const { email, password } = req.body;
 
  const isUserExists = await db.collection("user").findOne({ email });
  console.log(isUserExists)

  if (!isUserExists || !bcrypt.compareSync(password, isUserExists.password)) {
    return res.status(404).send({ message: "E-mail ou senha incorretos" });
  }

  const token = uuid();
  const image = isUserExists.image;

  await db.collection("sessions").insertOne({ userId: isUserExists._id, token });

  res.send({ token, image });
}

export { signIn };
