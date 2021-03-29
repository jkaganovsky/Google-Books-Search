const router = require("express").Router();
const axios = require("axios");
const { Book } = require("../models");

// Route to get books from Google API
router.get("/googlebooks/:title", function(req, res) {
  const title = req.params.title
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
    .then(function(results) {
      res.json(results.data.items)
    })
}),

router
  .route("/books")
  .get((req, res) => {
    console.log("Get Books:", req.body);
    Book
      .find()
      .then(books => res.json(books))
      .catch(err => console.log(err));
  })
  .post((req, res) => {
    // console.log(req.body);
    const {
      title,
      authors,
      description,
      image,
      link
    } = req.body;

    Book
      .create({
        title,
        authors,
        description,
        image,
        link
      })
      .then(newBook => res.json(newBook))
      .catch(err => console.log(err));
});

router
  .route("/books/:id")
  .delete((req, res) => {
    Book
      .findByIdAndDelete( req.params.id )
      .then(deletedBook => res.json(deletedBook))
      .catch(err => console.log(err));
  })

module.exports = router;