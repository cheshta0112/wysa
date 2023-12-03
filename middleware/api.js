const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

module.exports.userAuth = async (req, res, next) => {
  try {
    const token = req.header("authorization").split(" ")[1];
    jwt.verify(token, "something", async (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "Failed to authenticate token" });
      }
      const user = await userModel.findById(decoded.userId);
      req.user = decoded.userId;
      next();
    });
  } catch (e) {
    console.log(e);
    const error = "Unauthorized";
    return res.status(401).json({ error: "unauthorized" });
  }
};
