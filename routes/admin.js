const express = require("express");
const router = express.Router();
const userModel = require("../models/Users");
const contractModel = require("../models/Contracts")
const optionModel = require('../models/Options')
const protectedRoute =  require('../middlewares/protectedRoute')

//See all users
router.get("/users",protectedRoute, async (req, res, next) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

//create a new user
router.post("/users/create",protectedRoute, async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await userModel.create({ ...req.body });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

//Display one specific user's info
router.get("/users/:id",protectedRoute, async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

//delete the specific user
router.delete("/users/:id/delete",protectedRoute, async (req, res, next) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted");
  } catch (error) {
    next(error);
  }
});

//display contracts list
router.get("/contracts",protectedRoute, async (reg,res,next) => {
    try {
        const contracts  = await contractModel.find().populate("clients options");
        res.status(200).json(contracts)
    } catch (error) {
        next(error)
    }
})

//create contract
router.post("/contracts",protectedRoute, async (req,res,next) => {
    try {
        //const user = await userModel.findById(req.body.user)
        console.log(req.body);
        //const contract = await contractModel.create({status : req.body.status, clients : req.body.user, options : req.body.options  } )
        const contract = await contractModel.create({...req.body } )
        res.status(201).json(contract)
    } catch (error) {
        next(error)
    }
})


module.exports = router;
