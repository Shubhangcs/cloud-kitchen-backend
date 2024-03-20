const bcrypt = require("bcrypt");
const db = require("../database/db");
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const loginQuery = `SELECT * FROM USERDETAILS WHERE USER_EMAIL = ?;`;
  db.query(loginQuery, [email], (error, result) => {
    if (error) {
      res.status(500).json({ status: false, message: "Something Went Wrong." });
    } else if (result.length == 0) {
      res.status(500).json({ status: false, message: "Account Dosen't Exist" });
    } else {
      bcrypt.compare(password, result[0].USER_PASSWORD, (error, results) => {
        console.log(results);
        if (error) {
          res
            .status(500)
            .json({ status: false, message: "Something Went Wrong" });
        } else if (results) {
          res.status(200).json({
            status: true,
            message: "Login Successfull",
            token: jwt.sign(
              { email: email, password: password, name: result[0].USER_NAME ,userid:result[0].USER_ID },
              "cook",
              { expiresIn: "1h" }
            ),
          });
        } else {
          res
            .status(500)
            .json({ status: false, message: "Incorrect Password" });
        }
      });
    }
  });
};