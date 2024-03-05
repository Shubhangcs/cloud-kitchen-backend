const app = require('./app');
require("dotenv").config();

app.listen(5000, function () {
  console.log("Server Is Running At Port 5000");
});