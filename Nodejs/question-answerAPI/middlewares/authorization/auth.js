const CustomError = require("../../helpers/CustomError/CustomError")
const jwt = require("jsonwebtoken")
const { isTokenIncluded, getAccessTokenFromHeader } = require("../../helpers/authorization/tokenHelpers");
const User = require("../../models/User");
const asyncErrorWrapper = require("express-async-handler")


const getAccessToRoute = (req, res, next) => {

  const { JWT_SECRET_KEY } = process.env;

  if (!isTokenIncluded(req)) {
    return next(new CustomError("You Are Not Authorized to access this route", 401))
  }
  const accestoken = getAccessTokenFromHeader(req);
  jwt.verify(accestoken, JWT_SECRET_KEY, (err, decoded) => {

    if (err) {
      return next(new CustomError("You Are Not Authorized to access this route", 400))
    }

    req.user = {
      id: decoded.id,
      name: decoded.name
    }

    next()

  })
}

const getAdminAccess = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.user;

  const user = await User.findById(id)

  if (user.role !== "admin") {
    return next(new CustomError("Only admin's can access this route", 403))
  }
  next()
});


module.exports = {
  getAccessToRoute,
  getAdminAccess
}