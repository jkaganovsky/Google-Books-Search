import React from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/api";

function DeleteBtn({bookId}) {

  const deleteBook = () => {
  API.deleteBooks(bookId)
    .then((book) => {
      console.log("Deleted Book:", book)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  return (
      <Button className="m-1" type="delete" onClick={deleteBook}>Delete</Button>
  )
}

export default DeleteBtn;