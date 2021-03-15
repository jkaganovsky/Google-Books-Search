import React, { useState } from "react";
import API from "../../utils/api";
import { Card, Form, Button } from "react-bootstrap";


function SearchForm() {
  const [title, setTitle] = useState("");

  const handleInputChange = e => {
    const {value} = e.target
    setTitle(value)
    console.log(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    API.getBooks(title)
      .then(results => {
      console.log(results.data);
    })
  }

  return (
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
  )
}

export default SearchForm;