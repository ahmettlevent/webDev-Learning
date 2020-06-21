const CustomError = require("../../helpers/CustomError/CustomError")
const jwt = require("jsonwebtoken")
const { isTokenIncluded, getAccessTokenFromHeader } = require("../../helpers/authorization/tokenHelpers")


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
module.exports = {
  getAccessToRoute
}