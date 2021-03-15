import React from "react";
import Results from "../../components/Results";
import SearchForm from "../../components/Search";

function BookSearch() {

  return (
    <div className="p-2">
      <SearchForm />

      <div className="p-2">
        <Results />
      </div>
    </div>
  )
}

export default BookSearch;