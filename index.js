const app = require('./app');
require("dotenv").config();

app.listen(20055, function () {
  console.log("Server Is Running At Port 5000");
});