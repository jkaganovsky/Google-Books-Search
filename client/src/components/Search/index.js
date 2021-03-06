import React, { useRef } from "react";
import API from "../../utils/api";
import { Card, Form, Col, Button } from "react-bootstrap";


function SearchForm({ setBooks }) {

  const bookInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    API.getGoogleBooks(bookInput.current.value)
      .then(({data}) => {
      console.log("Form List:", data);
      setBooks(data);
    });
  }

  return (
    <Card className="p-2 my-4" border="info">
      <Form>
        <Form.Group>
          <Form.Label>Book Search</Form.Label>
          <Form.Control ref={bookInput} type="search" placeholder="Enter book title or author"/>
        </Form.Group >

        <Col style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </Col>
      </Form>
    </Card>
  )
}

export default SearchForm;