const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("magnusUsers", UsersSchema);
