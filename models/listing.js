const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: String,

    image: {
        type: String,
        default: "https://unsplash.com/photos/a-black-and-white-photo-of-a-hand-holding-a-square-object-ROmn_2809Ck",
        set: (v) => {
            v === '' ?
                "https://unsplash.com/photos/a-black-and-white-photo-of-a-hand-holding-a-square-object-ROmn_2809Ck"
                : v
        }
    },

    price : Number,
    location : String,
    country : String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;