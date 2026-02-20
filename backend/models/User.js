const mongoose = require("mongoose");
const roles = require("../constants/roles");

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
  roleId: {
    type: Number,
    default: roles.USER,
  },
  currentProgram: {
    type: String,
    default: "beginner",
  },
  currentWeek: {
    type: Number,
    default: 1,
  },
  currentDay: {
    type: Number,
    default: 1,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
