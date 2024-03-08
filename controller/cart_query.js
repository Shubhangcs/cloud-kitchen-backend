const db = require("../database/db");

module.exports = (req, res, next) => {
 try {
     const { price, quantity, userid, foodid, date } = req.body;
     const retriveData = `SELECT  * FROM CARTITEMS`;
     for (var i = 0; i < retriveData["data"].length; i++) {
       if (
         retriveData["data"][i]["USER_ID"] == userid &&
         retriveData["data"][i]["FOOD_ID"] == foodid
       ) {
         const addDataQuery = `UPDATE CARTITEMS SET CART_PRICE = ? , CART_QUANTITY = ? WHERE USER_ID = ? AND FOOD_ID = ?`;
         db.query(
           addDataQuery,
           [
             price + retriveData["data"][index]["CART_PRICE"],
             quantity + retriveData["data"][index]["CART_QUANTITY"],
             userid,
             foodid,
           ],
           (error, result) => {
             res.status(500).json({ status: false, message: error.message });
             res
               .status(200)
               .json({ status: true, message: "Query Execuited Successfully" });
           }
         );
       } else {
         const addToCartQuery = `INSERT INTO CARTITEMS (CART_PRICE , CART_QUANTITY , USER_ID , FOOD_ID , CART_DATE) VALUES(?,?,?,?,?)`;
         db.query(
           addToCartQuery,
           [price, quantity, userid, foodid, date],
           (error, result) => {
             if (error) {
               res.status(500).json({ status: false, message: error.message });
             }
             res
               .status(200)
               .json({ status: true, message: "Added to cart Successfully" });
           }
         );
       }
     }
 } catch (error) {
     res.status(500).json({ error:error.message });
 }
};
