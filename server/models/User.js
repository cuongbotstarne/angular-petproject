const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  level: Number,
});

module.exports = mongoose.model("User", UserSchema);
