import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

function Results() {
  return (
    <div className="p-2">
      <h5>Results</h5>
        <Container fluid="md">
          <Row>
            <Col>Book Name</Col>
          </Row>
        </Container>
    </div>
  )
}

export default Results;