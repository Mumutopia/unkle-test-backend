const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  famillyName: String,
  email: {
    unique: true,
    required: true,
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "client"],
  },
});

const userModel = model("users", UserSchema);
module.exports = userModel;
