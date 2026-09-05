if (process.env.NODE_ENV !== "production") {
    const path = require("path");
    require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// Fallback logic if env fails
const dbUrl = process.env.ATLASDB_URL || process.env.MONGO_URL;

if (!dbUrl) {
    console.error("Error: Database URL is undefined. Check your .env file!");
    process.exit(1);
}

main()
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
    initDB();
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Database initialized successfully on Atlas!");
  mongoose.connection.close();
};