const db = require("../database/db");

module.exports = async (req, res, next) => {
  const { name, foodtype, catogery, rating, hotelid, price , image} = req.body;
  const foodAddQuery = `
        INSERT INTO FOODITEMS(FOOD_NAME , FOOD_TYPE , FOOD_CATOGERY , FOOD_RATING , FOOD_PRICE , HOTEL_ID , FOOD_IMAGE) VALUES(?,?,?,?,?,?,?);
    `;
  db.query(
    foodAddQuery,
    [name, foodtype, catogery, rating, price, hotelid , image],
    (error, result) => {
      if (error) {
        res.status(500).json({ status: false, message: error.message });
      }
       res
        .status(200)
        .json({ status: true, message: "Query Execuited Successfull" });
    }
  );
};
