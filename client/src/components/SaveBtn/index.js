import React, { useState } from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/api.js";

function SaveBtn({ books }) {

  const saveBook = () => {

    API.addBooks(books)
      .then(({data}) => {
        res.json(data);
        console.log("Saved Book:", data);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  return(
    <Button className="m-1" type="save" onClick={saveBook}>Save</Button>
  )
}

export default SaveBtn;