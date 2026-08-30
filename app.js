const express = require("express")
const app = express();
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing")
const path = require('path')


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


// Routes
app.get('/', (req, res) => {
    res.send("Hello, home page")
})

app.get('/listings', async (req, res) => {
    let sampleList
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})