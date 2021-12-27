const { Schema, model } = require("mongoose");

const ContractSchema = new Schema({
  status: {
    type: String,
    enum: ["active", "pending", "finished"],
    //required: true,
  },
  startDate: {
    type: Date,
  //  required: true,
  },
  endDate: {
    type: Date,
    // required: true,
  },
  clients: 
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  
  options: 
    {
      type: Schema.Types.ObjectId,
      ref: "options",
    },
  
});

const contractModel = model("contracts", ContractSchema);
module.exports = contractModel;
