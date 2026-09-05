const Listing = require("../models/listing.js")

module.exports.indexController = async (req, res) => {
    const { search } = req.query;
    let allListings;

    if (search && search.trim() !== "") {
        allListings = await Listing.find({
            $or: [
                { title: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } },
                { country: { $regex: search, $options: "i" } }
            ]
        });
    } else {
        allListings = await Listing.find({});
    }

    res.render("listings/index.ejs", { allListings });
};

module.exports.newListingFormController = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.createNewListingController = async (req, res) => {
    let { url } = req.body.listing.image || {};
    let imageUrl = req.body.listing.image;
    let filename = "listingimage";

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    // Check if image URL exists
    if (imageUrl && imageUrl.trim() !== "") {
        newListing.image = { url: imageUrl, filename };
    }

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.showRouteController = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

module.exports.editFormController = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing })
}

module.exports.updateListingController = async (req, res) => {
    let { id } = req.params;
    let { image } = req.body.listing;

    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof image === "string" && image.trim() !== "") {
        listing.image = {
            url: image,
            filename: "listingimage"
        };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListingContorller = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect(`/listings`);
}