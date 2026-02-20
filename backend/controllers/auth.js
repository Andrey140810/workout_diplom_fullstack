const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generate } = require("../helpers/token");
require("dotenv").config();

const register = async (login, password) => {
  if (!login || !password) throw new Error("Invalid credentials");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ login, password: hashedPassword });
  const token = generate({ id: user._id });
  return { user, token };
};

const login = async (login, password) => {
  const user = await User.findOne({ login });
  if (!user) throw new Error("User not found");

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) throw new Error("Wrong password");

  const token = generate({ id: user._id });

  return { user, token };
};

module.exports = { register, login };
