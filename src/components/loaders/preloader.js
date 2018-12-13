import React, { Component } from 'react';
import {
  Container, Row, Col
}                           from 'reactstrap';

class PreLoader extends Component {
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col className="d-flex justify-content-center text-center">
            <div className="loader"></div>
          </Col>
        </Row>
      </Container>  
    );
  }
}

export default PreLoader;