const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/expressError");
const { listingSchema } = require("../schema.js");
const mongoose = require("mongoose");
const { isLoggedIn, saveRedirectUrl, isOwner } = require("../middleware.js");

// Validation Listing
const ValidateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}


// Index Route
router.get('/', wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render('listings/index.ejs', { allListings });
}));


// New Route
router.get("/new", isLoggedIn, ValidateListing, (req, res) => {
    res.render("listings/new.ejs");
});


// Create Route
router.post("/", isLoggedIn, ValidateListing, wrapAsync(async (req, res) => {
    const allListing = new Listing(req.body.listing);
    allListing.owner = req.user._id;
    await allListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings")
}));


// Show Route
router.get("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}));


// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, ValidateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing })
}));


//Update Route
router.put("/:id", isLoggedIn, isOwner, ValidateListing, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}));


//Delete Route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect(`/listings`);
}));


module.exports = router;