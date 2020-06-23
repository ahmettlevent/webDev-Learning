const User = require("../../models/User")
const asyncErrorWrapper = require("express-async-handler")
const CustomError = require("../../helpers/CustomError/CustomError");



const checkUserExist = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  const user = await User.findById(id)
  console.log(user);

  if (!user) {
    return next(new CustomError("There is no user!", 400))
  }

  req.data = user;

  next()
})

module.exports = {
  checkUserExist
}
