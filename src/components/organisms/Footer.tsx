import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RowMain } from "../../css/default";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={4}>
            <a href={`/demo1`}>Demo1</a>
          </Col>
          <Col lg={4}>
            <a href={`/demo2`}>Demo2</a>
          </Col>
          <Col lg={4}>
            <a href={`/todo`}>todo</a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
