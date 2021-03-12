import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Results from "../../components/Results";
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
      <Card className="p-2" border="info">
        <Form>
          <Form.Group>
            <Form.Label>Book Search</Form.Label>
            <Form.Control type="search" placeholder="Enter book title" onChange={handleInputChange} value={title} />
          </Form.Group>

          <Button className="align-items-right" variant="primary" type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </Form>
      </Card>

      <div className="p-2">
        <Results />
      </div>
    </div>
  )
}

export default BookSearch;