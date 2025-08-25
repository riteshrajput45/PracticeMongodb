const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true }
}, { timestamps: true });
console.log("data")
module.exports = mongoose.model("User", userSchema);