const Workout = require("../models/Workout");

const createWorkout = async (data) => {
  return await Workout.create(data);
};

const getWorkoutsByUserId = async (userId) => {
  return await Workout.find({ userId }).sort({ completedAt: -1 });
};

module.exports = { createWorkout, getWorkoutsByUserId };
