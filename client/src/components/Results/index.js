import React from "react";
import { Button, Card, Media, Row, Col } from "react-bootstrap";

function Results({ books }) {
  return (

    <Card border="info">
      <Card.Body>
        {books.length

      ?(
        <div>
          <h5>Results</h5>
            {books.map((book) => (
              <Card className="p-2" border="info" key={book.id}>
                <Card.Body>
                  <Row className="p-3">
                    <Col sm={8}>
                      <h6>{book.volumeInfo.title}</h6>
                      <h7>Written By: {book.volumeInfo.authors}</h7>
                    </Col>
                    <Col sm={4}>
                      <Button className="m-1" type="view">View</Button>
                      <Button className="m-1" type="save">Save</Button>
                    </Col>
                  </Row>

                  <ul className="list-unstyled">
                    <Media as="li">
                      <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                      />
                      <Media.Body>
                        <p>{book.volumeInfo.description}</p>
                      </Media.Body>
                    </Media>
                  </ul>
                </Card.Body>
              </Card>
            ))}
        </div>
      )
      : <h5>Book Not Found</h5>}
      </Card.Body>
    </Card>
  )
}

export default Results;