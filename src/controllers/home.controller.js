import db from "../database/db.js";


async function GetDb(req, res) {
    const list = await db.collection("itemList").find({value: 5});
    console.log(list[0]);
    res.send(list);
}

export { GetDb };