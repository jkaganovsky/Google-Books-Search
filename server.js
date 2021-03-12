const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Connection to mongoDB
require("./config/connect");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connecting with Express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connecting with Routes
app.use(require("./routes/api"));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
