const db = require("../database/db");

module.exports = async (req, res, next) => {
  const userTableQurey = `
        CREATE TABLE USERDETAILS(
            USER_ID INT NOT NULL AUTO_INCREMENT,
            USER_NAME VARCHAR(200) NOT NULL,
            USER_EMAIL VARCHAR(200),
            USER_PASSWORD VARCHAR(300) NOT NULL,
            PRIMARY KEY (USER_EMAIL , USER_ID)
        )ENGINE=MyISAM;
    `;
  db.query(userTableQurey, (error, result) => {
    if (error) {
      res.status(500).json({ status: false, message: error.message });
    }
    res
      .status(200)
      .json({ status: true, message: "Table Created Successfully" });
  });
};
