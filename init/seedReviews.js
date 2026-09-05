if (process.env.NODE_ENV !== "production") {
    const path = require("path");
    require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

const mongoose = require("mongoose");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { reviews } = require("./reviewData.js");

const dbUrl = process.env.MONGO_URL || process.env.ATLASDB_URL;

async function seedReviews() {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB for Seeding Reviews...");

    // 1. Clear existing reviews
    await Review.deleteMany({});
    
    // 2. Insert new 50 fake reviews
    const createdReviews = await Review.insertMany(reviews);
    console.log("50 Reviews created!");

    // 3. Randomly attach created reviews to listings
    const allListings = await Listing.find({});
    
    for (let listing of allListings) {
        // Assign 1 to 3 random reviews to each listing
        const randomReviews = createdReviews
            .sort(() => 0.5 - Math.random())
            .slice(0, Math.floor(Math.random() * 3) + 1);

        listing.reviews = randomReviews.map(r => r._id);
        await listing.save();
    }

    console.log("Reviews randomly assigned to listings successfully!");
    mongoose.connection.close();
}

seedReviews().catch(err => console.log(err));