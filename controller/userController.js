const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.login = async function (req, res) {
  const { username, password } = req.body;
  let user = await User.findOne({ username: username });
  if (user) {
    return res.status(409).json({ message: "name already exist" });
  }

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ username: username, password: hashedPassword });
  }
  const token = jwt.sign(
    { userId: user._id, username: user.username },
    "something",
    {
      expiresIn: "24h",
    }
  );

  user.token = token;
  await user.save();

  res.status(200).json({ message: "Login successful", user });
};
