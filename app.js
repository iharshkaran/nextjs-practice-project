const express = require("express")
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing")
const path = require('path')
const methodOverride = require("method-override");

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
app.use(express.json());


// Routes
app.get('/', (req, res) => {
    res.send("Hi, I am root")
})

// Index Route
app.get('/listings', async (req, res) => {
    const allListings = await Listing.find({});
    res.render('listings/index.ejs', { allListings });
})

// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Create Route
app.post("/listings", async (req, res) => {
    const allListing = new Listing(req.body.listing);
    await allListing.save();
    res.redirect("/listings")
});

// Show Route
app.get("/listings/:id", async (req, res)=>{
    const {id} = req.params ;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})

// Edit Route
app.get("/listings/:id/edit", async (req, res) =>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing})
})

//Update Route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect(`/listings`);
});


app.listen(8080, () => {
    console.log("Server is running on port 8080")
})