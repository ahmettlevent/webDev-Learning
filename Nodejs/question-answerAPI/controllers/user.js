const CustomError = require("../helpers/CustomError/CustomError");
const asyncErrorWrapper = require("express-async-handler")
const User = require("../models/User")

const getSingleUser = asyncErrorWrapper(async (req, res, next) => {
  return res.status(200).json({
    success: true,
    data: req.data
  })
});

const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
  const users = await User.find()
  return res.status(200).json({
    success: true,
    data: users
  })
});

const deleteSingleUser = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findById(req.params.id)
  user.deleteOne()
  user.save()

  return res.status(200).json({
    success: true,
    message: "Delete Successfull"
  })
});

const blockSingleUser = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findById(req.params.id)
  user.blocked = !user.blocked;
  user.save()

  return res.status(200).json({
    success: true,
    message: "Block - Unblock Successfull"
  })
});

module.exports = {
  getSingleUser,
  getAllUsers,
  deleteSingleUser,
  blockSingleUser
}