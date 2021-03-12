import React from "react";
import { Card, Button, Col, Row, Media } from "react-bootstrap";

function Saved() {
  return (
    <div className="p-2">

      <h5>Saved Books</h5>

      <Card border="info">
        <Card.Body>
          <Row className="p-3">
            <Col sm={8}>
              <h6>Book Title</h6>
              <h7>Author</h7>
            </Col>
            <Col sm={4}>
              <Button className="m-1" type="view">View</Button>
              <Button className="m-1" type="delete">Delete</Button>
            </Col>
          </Row>

          <ul className="list-unstyled">
            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src="holder.js/64x64"
                alt="Generic placeholder"
              />
              <Media.Body>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
          </ul>
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default Saved;