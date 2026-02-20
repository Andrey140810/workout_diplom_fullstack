const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth"));
router.use("/api/users", require("./users"));
router.use("/api/workouts", require("./workouts"));
router.use("/api/stats", require("./stats"));

module.exports = router;
