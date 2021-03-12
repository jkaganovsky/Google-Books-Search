import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import API from "../../utils/api";

function BookSearch() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");

  const handleInputChange = e => {
    const {value} = e.target
    setTitle(value)
    console.log(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    API.getBooks(title).then(results => {
      console.log(results.data);
    })
  }

  return (
    <div className="p-2">

      <Form>
        <Form.Group>
          <Form.Label>Book Search</Form.Label>
          <Form.Control type="search" placeholder="Enter book title" onChange={handleInputChange} value={title} />
        </Form.Group>

        <Button className="align-items-end" variant="primary" type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </Form>

    </div>
  )
}

export default BookSearch;