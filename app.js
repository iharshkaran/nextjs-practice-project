const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const listings = require("./routes/listing.route.js");
const reviews = require("./routes/review.route.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

connectDb()
    .then(() => {
        console.log("Connect to DB ")
    })
    .catch((err) => {
        console.log(err)
    })

async function connectDb() {
    await mongoose.connect(MONGO_URL)
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


// Routes
app.get('/', (req, res) => {
    res.send("Hi, I am root")
})

app.use("/listings", listings);
app.use("/listings/:id/reviews",reviews);


// 404 Route Handler
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went Wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})