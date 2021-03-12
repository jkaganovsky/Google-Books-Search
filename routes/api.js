const router = require("express").Router();
const db = require("../models");
const axios = require("axios");

router.get("/api/googlebooks/:title", function(req, res) {
  const title = req.params.title
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
    .then(function(results) {
      res.json(results.data.items)
    })
})

module.exports = router;