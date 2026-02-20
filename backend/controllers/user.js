const User = require("../models/User");

const getUserById = async (id) => {
  const user = await User.findById(id).select("-password");
  if (!user) throw new Error("User not found");
  return user;
};

const updateUserProgress = async (userId, updates) => {
  const user = await User.findByIdAndUpdate(userId, updates, {
    new: true,
  }).select("-password");
  if (!user) throw new Error("User not found");
  return user;
};

module.exports = { getUserById, updateUserProgress };
