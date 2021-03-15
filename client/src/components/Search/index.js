import React, { useRef } from "react";
import API from "../../utils/api";
import { Card, Form, Button } from "react-bootstrap";


function SearchForm({ setBooks }) {

  const bookInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    API.getBooks(bookInput.current.value)
      .then(({data}) => {
      // console.log("Data:", data);

      setBooks(data);
    });
  }

  return (
    <Card className="p-2" border="info">
      <Form>
        <Form.Group>
          <Form.Label>Book Search</Form.Label>
          <Form.Control ref={bookInput} type="search" placeholder="Enter book title"/>
        </Form.Group>

        <Button className="align-items-right" variant="primary" type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </Form>
    </Card>
  )
}

export default SearchForm;