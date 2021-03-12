const mongoose = require("mongoose");

// Connect to the Mongo DB
module.exports = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");