const express = require("express")
const router = express.Router()

const { getUserId, getUser, updateUser, userOrderList, deleteUser} = require("../conrollers/user")

const { isSignedIn, isAuth } = require("../conrollers/auth")


// params
router.param("userId", getUserId)

// user routes
router.get("/user/:userId", isSignedIn, isAuth, getUser)
router.put("/user/:userId", isSignedIn, isAuth, updateUser)
router.get("/orders/user/:userId", isSignedIn, isAuth, userOrderList)
router.delete("/orders/user/:userId", isSignedIn, isAuth, deleteUser)


module.exports = router
