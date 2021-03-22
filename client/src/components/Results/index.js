import React from "react";
import { Button, Card, Media, Row, Col } from "react-bootstrap";
import SaveBtn from "../SaveBtn";

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
                    <Col sm={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
                      <Button href={book.volumeInfo.infoLink}>View</Button>
                      <SaveBtn book={book.id}/>
                    </Col>
                    <Col sm={8}>
                      <h6>{book.volumeInfo.title}</h6>
                      <h6>Written By: {book.volumeInfo.authors}</h6>
                    </Col>
                  </Row>

                  <ul className="list-unstyled">
                    <Media as="li">
                      <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={book.volumeInfo.imageLinks.smallThumbnail}
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