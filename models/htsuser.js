const mongoose = require("mongoose");

const HtsUserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const HtsUser = mongoose.model("HtsUser", HtsUserSchema);

module.exports = { HtsUser };
