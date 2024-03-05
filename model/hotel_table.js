const db = require("../database/db");

module.exports = async (req, res, next) => {
  const hotelTableQuery = `
        CREATE TABLE HOTELS(
            HOTEL_ID INT AUTO_INCREMENT PRIMARY KEY,
            HOTEL_NAME VARCHAR(200),
            HOTEL_TYPE VARCHAR(20),
            HOTEL_RATING DOUBLE(2,1),
            HOTEL_ADRESS VARCHAR(300),
            HOTEL_IMAGE VARCHAR(400)
        );
    `;
  db.query(hotelTableQuery, (error, result) => {
    if (error) {
      res.status(500).json({ status: false, message: error.message });
    }
    res
      .status(200)
      .json({ status: true, message: "Table Created Successfully" });
  });
};
