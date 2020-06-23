const User = require("../models/User")
const CustomError = require("../helpers/CustomError/CustomError");
const asyncErrorWrapper = require("express-async-handler")
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers")
const { validateUserInput, comparePasswords } = require("../helpers/input/inputHelpers");
const sendEmail = require("../helpers/libraries/sendEmail")


// Auth Side
const register = asyncErrorWrapper(async (req, res, next) => {

  const { name, email, password, role } = req.body

  const user = await User.create({ name, email, password, role })

  sendJwtToClient(user, res);

})

const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  if (!validateUserInput(email, password)) {
    return next(new CustomError("Please Check Your Inputs", 400))
  }

  const user = await User.findOne({ email }).select("+password")

  if (!comparePasswords(password, user.password)) {
    return next(new CustomError("Please Check Your Crediantels ", 400))
  }

  sendJwtToClient(user, res);
})

const logout = asyncErrorWrapper(async (req, res, next) => {

  const { NODE_ENV } = process.env;
  return res.status(200)
    .cookie({
      httpOnly: true,
      expires: new Date(Date.now()),
      secure: NODE_ENV === "developments" ? false : true
    }).json({
      success: true,
      message: "Logout Succesful"
    })

});

const forgotPassword = asyncErrorWrapper(async (req, res, next) => {
  const resetEmail = req.body.email;

  const user = await User.findOne({
    email: resetEmail
  })

  if (!user) {
    return next(new CustomError("There is no user with that email", 400))
  }

  const resetPasswordToken = user.getResetPasswordTokenFromUser()

  await user.save();

  const resetPasswordUrl = `http://localhost:5000/api/auth/resetpassword?resetPasswordToken=${resetPasswordToken}`

  const emailTemplate = `
  <h3>Reset Your PASS</h3>
  <p>This <a href='${resetPasswordUrl}'>link </a>will expire in 1 hour</p> 
  `

  try {
    await sendEmail({
      from: process.env.SMTP_USER,
      to: resetEmail,
      subject: "Reset Your PASS",
      html: emailTemplate
    })
    return res.status(200).json({
      success: true,
      message: "Token Sent To Your Email"
    })
  } catch{
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return next(new CustomError("Email Couldn't Send", 500))
  }

})


const resetpassword = asyncErrorWrapper(async (req, res, next) => {
  const { resetPasswordToken } = req.query;

  const { password } = req.body;

  if (!resetPasswordToken) {
    return next(new CustomError("Please provide a valid token", 400))
  }

  let user = await User.findOne({
    resetPasswordToken: resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() }
  })

  if (!user) {
    return next(new CustomError("Invalid token or session expired", 404))
  }

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  return res
    .status(200)
    .json({ success: true, message: "Reset Password Proccess Successfull" })
})

// User Side

const getUser = (req, res, next) => {
  res.json({
    success: true,
    data: {
      id: req.user.id,
      name: req.user.name
    }
  })
}

const imageUpload = asyncErrorWrapper(async (req, res, next) => {
  if (req.savedProfileImage == null) {
    return next(new CustomError("You Need to Choose Any File", 400), false)
  }

  const user = await User.findByIdAndUpdate(req.user.id, {
    "profile_image": req.savedProfileImage
  }, {
    new: true,
    runValidators: true
  })
  res.status(200)
    .json({
      success: true,
      message: 'Image Upload Successfull',
      data: user
    })
})

const editDetails = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.user;
  const editInformatiob = req.body;
  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });

  user.save()

  res.status(200).json({
    success: true,
    data: user
  })

})


module.exports = {
  register,
  getUser,
  login,
  logout,
  imageUpload,
  forgotPassword,
  resetpassword, editDetails
}