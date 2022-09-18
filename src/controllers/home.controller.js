import db from "../database/db.js";


async function GetDb(req, res) {
    const list = await db.collection("itemList").find().toArray();
    console.log(list);
    res.send(list);
}

export { GetDb };