const express = require("express");
const {
  createWorkout,
  getWorkoutsByUserId,
} = require("../controllers/workout");
const auth = require("../middlewares/auth");

const router = express.Router({ mergeParams: true });

router.post("/", auth, async (req, res) => {
  try {
    const data = { ...req.body, userId: req.userId };
    const workout = await createWorkout(data);
    res.status(201).json({ error: null, workout });
  } catch (e) {
    res.status(400).json({ error: e.message || "Failed to save workout" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const workouts = await getWorkoutsByUserId(req.userId);
    res.json({ error: null, workouts });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch workouts" });
  }
});

module.exports = router;
