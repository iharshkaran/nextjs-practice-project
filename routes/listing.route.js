const express = require("express");
const router = express.Router();
const multer  = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, ValidateListing } = require("../middleware.js");
const { 
    indexController,
    newListingFormController,
    createNewListingController,
    showRouteController,
    editFormController,
    updateListingController,
    destroyListingContorller
} = require("../controllers/listings.js");


// Index Route & Create Route
router
    .route('/')
    .get(wrapAsync(indexController))
    .post(
        isLoggedIn, 
        upload.single('listing[image]'),
        ValidateListing,                 
        wrapAsync(createNewListingController)
    );

// New Form Route
router.get("/new", isLoggedIn, newListingFormController);

// Show, Update & Delete Routes
router
    .route("/:id")
    .get(wrapAsync(showRouteController))
    .put(
        isLoggedIn, 
        isOwner, 
        upload.single('listing[image]'), // Multer added for update
        ValidateListing, 
        wrapAsync(updateListingController)
    )
    .delete(isLoggedIn, isOwner, wrapAsync(destroyListingContorller));

// Edit Form Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(editFormController));


module.exports = router;