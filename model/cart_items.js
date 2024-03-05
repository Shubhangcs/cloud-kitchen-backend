const db = require("../database/db");

module.exports = async (req, res, next) => {
  const cartItems = `
        CREATE TABLE CARTITEMS(
            CART_ID INT AUTO_INCREMENT,
            CART_DATE DATE,
            CART_PRICE INT,
            CART_QUANTITY INT,
            USER_ID INT,
            FOOD_ID INT,
            PRIMARY KEY(CART_ID , USER_ID),
            FOREIGN KEY (USER_ID) REFERENCES USERDETAILS(USER_ID),
            FOREIGN KEY (FOOD_ID) REFERENCES FOODITEMS(FOOD_ID)
        )ENGINE=MyISAM;
    `;
  db.query(cartItems, (error, result) => {
    if (error) {
      res.status(500).json({ status: false, message: error.message });
    }
    res
      .status(200)
      .json({ status: true, message: "Table Created Successfully" });
  });
};