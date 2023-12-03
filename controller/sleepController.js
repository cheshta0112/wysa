const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sleep = require("../models/sleep");

module.exports.updateSlepTime = async function (req, res) {
  const { positiveChanges, sleepStruggle, bedtime, waketime, sleepDuration } =
    req.body;

  const user = req.user;
  const data = req.body;

  if (
    data.sleepDuration &&
    (Number(data.sleepDuration) > 8 || Number(data.sleepDuration) < 1)
  ) {
    return res
      .status(400)
      .json({ error: "sleep duration should be between 1 to 8 hours" });
  }

  const s = await sleep.findOneAndUpdate(
    {
      userID: user.id,
    },
    data,
    { upsert: true }
  );

  res.status(201).json({ message: "Update successful", s });
};

module.exports.efficiencyCalculation = async (req, res) => {
  const user = req.user;
  const s = await sleep.findOne({
    userID: user.id,
  });

  const efficiency = (s.sleepDuration / 8) * 100;

  res.status(200).json(efficiency);
};
