const User = require("../models/user.js");

module.exports.renderSignupFrom = (req, res) => {
    res.render("auth/signup.ejs");
}

module.exports.signupController = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        // Login user right after successful registration
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            return res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginFrom = (req, res) => {
    res.render("auth/login.ejs");
}

module.exports.loginController = (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    if (redirectUrl.includes("?_method=DELETE") || redirectUrl.includes("/reviews")) {
        redirectUrl = "/listings";
    }
    res.redirect(redirectUrl);
}

module.exports.logoutController = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
}