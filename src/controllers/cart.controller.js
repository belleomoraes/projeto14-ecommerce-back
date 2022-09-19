import db from "../database/db.js";
import dayjs from "dayjs"

async function AddCart(req, res) {
  const { value, token, itens } = req.body;

  try {
    await db.collection("cart").insertOne({ value, token, itens, date: dayjs().format("D/M") });
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}


export { AddCart };
