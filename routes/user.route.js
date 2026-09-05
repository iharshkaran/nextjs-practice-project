const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { renderSignupFrom, signupController, renderLoginFrom, loginController, logoutController } = require("../controllers/users.js")

// Signup
router.route("/signup")
    .get(renderSignupFrom)
    .post(wrapAsync(signupController));

// Login
router.route("/login")
    .get(renderLoginFrom)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true,
        }),
        loginController
    );

//  Logout
router.get("/logout", logoutController);


module.exports = router;