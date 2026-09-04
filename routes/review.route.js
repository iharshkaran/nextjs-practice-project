const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/expressError");
const { reviewSchema } = require("../schema.js");

// Validation Review
const ValidateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

// Post Review Route
router.post("/",
    ValidateReview,
    wrapAsync(
        async (req, res) => {
            let listing = await Listing.findById(req.params.id);
            let newReview = new Review(req.body.review);

            listing.reviews.push(newReview);

            await newReview.save();
            await listing.save();

            res.redirect(`/listings/${listing._id}`);
        }
    )
)

// Delete Review Route
router.delete("/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));


module.exports = router;