const express = require("express")

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Questions homepage")
})


router.get("/delete", (req, res) => {
  res.send("Questions homepage")
})

module.exports = router;