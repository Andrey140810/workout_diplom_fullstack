const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: [{ type: Number, required: true }],
  targetReps: String,
  targetSets: Number,
});

const programSchema = new mongoose.Schema({
  level: { type: String, required: true },
  week: { type: Number, required: true },
  day: { type: Number, required: true },
});

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  program: programSchema,
  exercises: [exerciseSchema],
  duration: { type: Number, required: true },
  completedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Workout", workoutSchema);
