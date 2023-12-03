const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const db = require("./mongoose");
const userRoutes = require("./routes/userRoutes");
const middleware = require("./middleware/api");
const sleepRouts = require("./routes/sleepRoutes");

app.use(express.json());

app.use("/", userRoutes);
app.use("/user", sleepRouts);

app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server:${err}`);
  }
  console.log(`server is runnng on port:${port}`);
});
