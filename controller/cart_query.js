const db = require("../database/db");

module.exports = (req, res, next) => {
  try {
    const { price, quantity, userid, foodid, date } = req.body;
    const retrieveData = `SELECT * FROM CARTITEMS WHERE USER_ID = ? AND FOOD_ID = ?;`;

    db.query(retrieveData, [userid, foodid], (error, result) => {
      if (error) {
        res.status(500).json({ status: false, message: error.message });
      } else if (result.length !== 0) {
        const updateCart = `UPDATE CARTITEMS SET CART_QUANTITY = ?, CART_PRICE = ? WHERE USER_ID = ? AND FOOD_ID = ?;`;

        db.query(
          updateCart,
          [
            quantity + result[0].CART_QUANTITY,
            price + result[0].CART_PRICE,
            userid,
            foodid,
          ],
          (error, message) => {
            if (error) {
              res.status(500).json({ status: false, message: error.message });
            } else {
              res.status(200).json({ status: true, message: "Query executed" });
            }
          }
        );
      } else {
        const freshQuery = `INSERT INTO CARTITEMS(CART_DATE, CART_PRICE, CART_QUANTITY, USER_ID, FOOD_ID) VALUES (?, ?, ?, ?, ?);`;

        db.query(
          freshQuery,
          [date, price, quantity, userid, foodid],
          (error, message) => {
            if (error) {
              res.status(500).json({ status: false, message: error.message });
            } else {
              res.status(200).json({ status: true, message: "Query executed" });
            }
          }
        );
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: false, message: e.message });
  }
};
