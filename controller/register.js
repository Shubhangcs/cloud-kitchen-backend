const bcrypt = require("bcrypt");
const db = require("../database/db");

module.exports = async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashPass = await bcrypt.hash(password, 10);
  const registerDetails = `INSERT INTO USERDETAILS(USER_NAME , USER_EMAIL , USER_PASSWORD) VALUES(?,?,?)`;
  db.query(registerDetails, [name, email, hashPass], (error, result) => {
    if (error) {
      res
        .status(500)
        .json({ status: false, message: "Something Went Wrong" });
    }
    res
      .status(200)
      .json({ status: true, message: "Registration Successfull" });
  });
};
