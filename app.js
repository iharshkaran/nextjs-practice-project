if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const { MongoStore } = require("connect-mongo");
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js")

const listingsRouter = require("./routes/listing.route.js");
const reviewsRouter = require("./routes/review.route.js");
const userRouter = require("./routes/user.route.js");
const PORT = process.env.PORT || 8080;


const MONGO_URL = process.env.MONGO_URL;

connectDb().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function connectDb() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const store = MongoStore.create({
    mongoUrl: MONGO_URL,
    crypto: {
        secret: process.env.SECRET || "mysupersecretcode",
    },
    touchAfter: 24 * 3600,
});

const sessionOptions = {
    store,
    secret: process.env.SECRET || "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
    }
};

store.on("error", (err) => {
    console.log("ERROR IN MONGO SESSION STORE", err);
});

app.use(session(sessionOptions));
app.use(flash());

app.set('trust proxy', 1)
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});

// Root Route
app.get('/', (req, res) => {
    res.render("home.ejs");
});

// API Routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

// 404 Handler
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Went Wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});