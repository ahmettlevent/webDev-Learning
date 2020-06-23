const express = require("express")
const router = express.Router();
const { register, getUser, login, logout, imageUpload, forgotPassword, resetpassword, editDetails } = require("../controllers/auth")
const { getAccessToRoute } = require("../middlewares/authorization/auth")
const profileImageUpload = require("../middlewares/libraries/profileImageUpload")

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.get("/profile", getAccessToRoute, getUser)
router.post("/upload", [getAccessToRoute, profileImageUpload.single("profile_image")], imageUpload)
router.post("/forgotpassword", forgotPassword)
router.put("/resetpassword", resetpassword)
router.put("/edit", getAccessToRoute, editDetails)
module.exports = router;