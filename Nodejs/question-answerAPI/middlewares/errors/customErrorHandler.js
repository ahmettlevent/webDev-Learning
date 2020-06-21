const CustomError = require('../../helpers/CustomError/CustomError');
customErrorHandler = (err, req, res, next) => {
  customerror = err;

  if (err.name === "SyntaxError") {
    customerror = new CustomError(err.message, 400)
  }
  if (err.name === "ValidationError") {
    customerror = new CustomError(err.message, 400)
  }
  if (err.code === 11000) {
    customerror = new CustomError("This Email Already Have !!", 400)
  }
  res.status(customerror.status || 500).json({
    success: false,
    message: customerror.message
  })
}

module.exports = customErrorHandler;