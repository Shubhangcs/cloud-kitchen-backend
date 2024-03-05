const db = require("../database/db");

module.exports = async (req, res, next) => {
  const { name, type, rating, address, image } = req.body;
  const insertQuery = `
    INSERT INTO HOTELS (HOTEL_NAME, HOTEL_TYPE, HOTEL_RATING, HOTEL_ADRESS,HOTEL_IMAGE)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(insertQuery, [name, type, rating, address,image], (error, result) => {
    if (error) {
      res.status(500).json({ status: false, message: error.message });
    } else {
      res
        .status(200)
        .json({ status: true, message: "Data inserted successfully" });
    }
  });
};
