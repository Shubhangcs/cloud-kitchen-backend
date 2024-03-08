const db = require("../database/db");

module.exports = async (req, res, next) => {
  try {
    const { price, quantity, userid, foodid, date } = req.body;

    const retrieveData = `SELECT * FROM CARTITEMS WHERE USER_ID = ? AND FOOD_ID = ?;`;
    const retrieveResult = await db.query(retrieveData, [userid, foodid]);

    let finalQuery = "";
    let itemList = [];

    if (retrieveResult.length !== 0) {
      finalQuery = `UPDATE CARTITEMS SET CART_QUANTITY = CART_QUANTITY + ?, CART_PRICE = CART_PRICE + ? WHERE USER_ID = ? AND FOOD_ID = ?`;
      itemList = [quantity, price, userid, foodid];
    } else {
      finalQuery = `INSERT INTO CARTITEMS(CART_DATE, CART_PRICE, CART_QUANTITY, USER_ID, FOOD_ID) VALUES (?, ?, ?, ?, ?)`;
      itemList = [date, price, quantity, userid, foodid];
    }

    const queryResult = await db.query(finalQuery, itemList);

    res.status(200).json({ status: true, message: "Query executed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
};
