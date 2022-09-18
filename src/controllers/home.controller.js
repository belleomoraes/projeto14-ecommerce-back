import db from "../database/db.js";


async function GetDb(req, res) {
    const list = await db.collection("itemList").find({ value: 5});
    res.send(list);
}

export { GetDb };