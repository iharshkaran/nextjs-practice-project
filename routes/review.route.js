const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isAuthor, ValidateReview } = require("../middleware.js");
const {reviewController,destroyReviewController} = require("../controllers/reviews.js")


// Post Review Route
router.post("/", isLoggedIn, ValidateReview, wrapAsync(reviewController))

// Delete Review Route
router.delete("/:reviewId",isLoggedIn, isAuthor, wrapAsync(destroyReviewController));

module.exports = router;