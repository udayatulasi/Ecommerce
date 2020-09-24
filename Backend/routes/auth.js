const express = require("express")
const { check, validationResult } = require("express-validator")
const router = express.Router();
const { signin, signup, signout } = require("../controllers/auth")


router.post("/signup", [
    check("name").isLength({min: 3}).withMessage("name should be min 3 char"),
    check("email").isEmail().withMessage("enter valid email"),
    check("password").isLength({min: 5}).withMessage("password should be min 5 char")
],
 signup)

router.post("/signin",[
    check("email").isEmail().withMessage("enter valid email"),
], signin)

router.get("/signout", signout)


module.exports = router