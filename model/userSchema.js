const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});

//const User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);
