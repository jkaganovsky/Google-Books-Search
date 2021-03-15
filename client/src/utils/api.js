import axios from "axios";

export default{
  getBooks: function(book) {
    console.log("Book:", book);
    return axios.get("/api/googlebooks/" + book)
  }
}