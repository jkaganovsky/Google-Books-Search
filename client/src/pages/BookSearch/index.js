import React, { useState } from "react";
import Results from "../../components/Results";
import SearchForm from "../../components/Search";

function BookSearch() {

  const [bookList, setBookList] = useState([]);

  console.log("Search List:", bookList);

  return (
    <div className="p-2">
      <SearchForm setBooks={setBookList} />

      <Results books={bookList}/>
    </div>
  )
}

export default BookSearch;