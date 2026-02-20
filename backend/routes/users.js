const express = require("express");
const { getUserById, updateUserProgress } = require("../controllers/user");
const auth = require("../middlewares/auth");
const mapUser = require("../helpers/mapUser");

const router = express.Router({ mergeParams: true });

router.get("/me", auth, async (req, res) => {
  try {
    const user = await getUserById(req.userId);
    res.json({ error: null, user: mapUser(user) });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

router.patch("/progress", auth, async (req, res) => {
  try {
    const { currentProgram, currentWeek, currentDay } = req.body;
    const user = await updateUserProgress(req.userId, {
      currentProgram,
      currentWeek,
      currentDay,
    });
    res.json({ error: null, user: mapUser(user) });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
