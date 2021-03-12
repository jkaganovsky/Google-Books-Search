import axios from "axios";

export default{
  getBooks: function (title){
    console.log(title,"title");
    return axios.get("/api/googlebooks/" + title)
  }
}