import React, { useState } from "react";
import Results from "../../components/Results";
import SearchForm from "../../components/Search";

function BookSearch() {

  const [books, setBooks] = useState([]);

  console.log("Books:", books);

  return (
    <div className="p-2">
      <SearchForm setBooks={setBooks} />

      <Results books={books}/>
    </div>
  )
}

export default BookSearch;