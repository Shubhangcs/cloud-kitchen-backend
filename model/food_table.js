const db = require("../database/db");

module.exports = async (req, res, next) => {
  const foodTableQuery = `
        CREATE TABLE FOODITEMS(
            FOOD_ID INT AUTO_INCREMENT PRIMARY KEY,
            FOOD_NAME VARCHAR(200),
            FOOD_TYPE VARCHAR(6),
            FOOD_CATOGERY VARCHAR(200),
            FOOD_RATING DOUBLE(2,1),
            FOOD_PRICE INT,
            HOTEL_ID INT,
            FOOD_IMAGE VARCHAR(400),
            FOREIGN KEY (HOTEL_ID) REFERENCES HOTELS(HOTEL_ID)
        );
    `;
  db.query(foodTableQuery, (error, result) => {
    if (error) {
      res.status(500).json({ status: false, message: error.message });
    }
    res
      .status(200)
      .json({ status: true, message: "Table Created Successfully" });
  });
};
