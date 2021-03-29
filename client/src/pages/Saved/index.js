import React, { useState, useEffect } from "react";
import SavedResults from "../../components/SavedResults";
import API from "../../utils/api";

function SavedPage() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    API
      .getBooks()
      .then(({data}) => {
        console.log("Page List:", data);
        setBooks(data)
      });
  }, [setBooks]);

  console.log("Saved books:", books);

  return (
    <div>
      <h5>SAVED BOOKS</h5>
      <SavedResults books={books}/>
    </div>

  )
}

export default SavedPage;