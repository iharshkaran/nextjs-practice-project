const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initialData = require("./data.js")
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

async function initData(){
    await Listing.deleteMany({});
    await Listing.insertMany(initialData.data);
    console.log("data was initialized");

}

initData()