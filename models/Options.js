const { Schema, model } = require("mongoose");

const OptionSchema = new Schema({
  name : String,
  description: {
    type: String,
  },
});

const optionModel = model("options", OptionSchema);
module.exports = optionModel;
