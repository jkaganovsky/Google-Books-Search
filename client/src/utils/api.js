import axios from "axios";

export default{
  getGoogleBooks: function(book) {
    console.log("Book:", book);
    return axios.get("/api/googlebooks/" + book);
  },

  addBooks: function(book) {
    return axios.post("/api/books", book);
  },

  getBooks: function() {
    return axios.get("/api/books");
  },

  deleteBooks: function(bookId) {
    return axios.delete(`/api/books/${bookId}`);
  }

}