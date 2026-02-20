const express = require("express");
const { getStatsByUserId } = require("../controllers/stats");
const auth = require("../middlewares/auth");

const router = express.Router({ mergeParams: true });

router.get("/", auth, async (req, res) => {
  try {
    const stats = await getStatsByUserId(req.userId);
    res.json({ error: null, stats });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

module.exports = router;
