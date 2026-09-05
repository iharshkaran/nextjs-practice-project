const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, ValidateListing } = require("../middleware.js");
const { indexController,
    newListingFormController,
    createNewListingController,
    showRouteController,
    editFormController,
    updateListingController,
    destroyListingContorller
} = require("../controllers/listings.js")


// Index Route & Create Route
router
    .route('/')
    .post(isLoggedIn, ValidateListing, wrapAsync(createNewListingController))
    .get(wrapAsync(indexController))

// New Route
router.get("/new", isLoggedIn, ValidateListing, newListingFormController);

// Show Route & Update Route & Delete Route
router
    .route("/:id").get(wrapAsync(showRouteController))
    .put(isLoggedIn, isOwner, ValidateListing, wrapAsync(updateListingController))
    .delete(isLoggedIn, isOwner, wrapAsync(destroyListingContorller));

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, ValidateListing, wrapAsync(editFormController));


module.exports = router;