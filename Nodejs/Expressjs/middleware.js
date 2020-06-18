const accessControl = (req, res, next) => {

  console.log("MiddleWare Access Control")

  const access = false;
  if (!access) {
    res.status(401).json({
      success: false,
      message: "request denied"
    })
  }

  next()
}
module.exports = {
  accessControl
};