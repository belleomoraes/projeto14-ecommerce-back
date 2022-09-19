import db from "../database/db.js";

async function getHistory(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
  
    if (!token) {
      return res.sendStatus(401);
    }
  
    const session = await db.collection("sessions").findOne({ token });
  
    if (!session) {
      return res.status(401).send({ message: "O usuário não está logado" });
    }
    try {
      const historyUser = await db.collection("cart").find({ token }).toArray();
      res.send(historyUser);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
  
  export { getHistory };