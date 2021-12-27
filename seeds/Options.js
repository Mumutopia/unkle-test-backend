require("dotenv").config();
require("./../config/mongo.js");

const optionModel = require("../models/Options");

const optionSeed = [
  {
    name: "test1",
  },
  {
    name: "test2",
  },
  {
    name: "test3",
  },
  {
    name: "test4",
  },
  {
    name: "test5",
  },
];

optionModel
  .deleteMany()
  .then(() => {
    optionModel.create(optionSeed).then(() => {
      console.log("options have been created");
      process.exit();
    });
  })
  .catch((err) => console.log("err", err));
