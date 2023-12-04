const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://cheshtapal07:cheshta01@cluster0.n8ab8pe.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
