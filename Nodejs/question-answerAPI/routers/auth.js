const express = require("express")

const router = express.Router();

router.get("/", (req, res) => {
  res.send("auth homepage")
})


router.get("/register", (req, res) => {
  res.send("auth homepage")
})

module.exports = router;