const express = require("express")
const router = express.Router();
const { getAdminAccess, getAccessToRoute } = require("../middlewares/authorization/auth")
const { checkUserExist } = require("../middlewares/database/databaseErrorHelpers")
const { deleteSingleUser, blockSingleUser } = require("../controllers/user.js")


router.use([getAccessToRoute, getAdminAccess])

router.get("/deleteuser/:id", checkUserExist, deleteSingleUser)
router.get("/blockuser/:id", checkUserExist, blockSingleUser)

module.exports = router;