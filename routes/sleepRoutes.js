const express = require("express");
const sleepController = require("../controller/sleepController");
const middleware = require("../middleware/api");

const router = express.Router();
router.use(middleware.userAuth);
router.post("/update", sleepController.updateSlepTime);
router.get("/sleepEfficiency", sleepController.efficiencyCalculation);

module.exports = router;
