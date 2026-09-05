if (process.env.NODE_ENV !== "production") {
    const path = require("path");
    require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

const mongoose = require("mongoose");
const User = require("../models/user.js");

const dbUrl = process.env.ATLASDB_URL || process.env.MONGO_URL;

main()
  .then(() => {
    console.log("Connected to DB for Seeding Users");
    seedUsers();
  })
  .catch((err) => console.log("DB Error:", err));

async function main() {
  await mongoose.connect(dbUrl);
}

const dummyUsers = [
  { username: "alice", email: "alice.smith@example.com", password: "a@123" },
  { username: "bob", email: "bob.johnson@example.com", password: "b@123" },
  { username: "charlie", email: "charlie.brown@example.com", password: "c@123" },
  { username: "david", email: "david.miller@example.com", password: "d@123" },
  { username: "emma", email: "emma.wilson@example.com", password: "e@123" },
];

async function seedUsers() {
  try {
    for (let u of dummyUsers) {
      let registeredUser = new User({ username: u.username, email: u.email });
      await User.register(registeredUser, u.password);
    }
    console.log("5 Dummy Users Registered Successfully on Atlas!");
  } catch (err) {
    console.log("Error seeding users:", err.message);
  } finally {
    mongoose.connection.close();
  }
}