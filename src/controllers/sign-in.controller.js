
import db from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

async function signIn(req, res) {
  const { email, password } = req.body;
 
  console.log('vou perguntar');
  const isUserExists = await db.collection("user").findOne({ email });
  console.log('perguntei');
  console.log(isUserExists);

  // if (!isUserExists || !bcrypt.compareSync(password, isUserExists.password)) {
  //   return res.status(400).send({ message: "E-mail ou senha incorretos" });
  // }

  const token = uuid();
  const image = isUserExists.image;

  await db.collection("sessions").insertOne({ userId: isUserExists._id, token });

  res.status(201);
  // res.send({ token, image });
}

export { signIn };
