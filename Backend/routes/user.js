const express = require("express")
const router = express.Router()

const { getUserId, getUser, updateUser, userOrder, userOrderList, deleteUser} = require("../controllers/user")

const { isSignedIn, isAuth } = require("../controllers/auth")


// params
router.param("userId", getUserId)

// user routes
router.get("/user/:userId", isSignedIn, isAuth, getUser)
router.put("/user/:userId", isSignedIn, isAuth, updateUser)
router.get("/orders/:userId/:orderId", isSignedIn, isAuth, userOrder)
router.get("/orders/:userId", isSignedIn, isAuth, userOrderList)
router.delete("/user/:userId", isSignedIn, isAuth, deleteUser)


module.exports = router
