import db from "../database/db.js";


async function GetDb(req, res) {
    try {
        const list = await db.collection("itemList").find().toArray();
        res.send(list);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
    
}

export { GetDb };