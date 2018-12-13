import React, { Component } from 'react';
import {
  Container, Row, Col
}                           from 'reactstrap';

import { hasProperty }      from '../utils';

class LoaderError extends Component {
  render() {
    const defaultMessage  = "There was an issue loading your content. Try reloading the page.";
    const message         = hasProperty(this.props, "message") ? this.props.message : defaultMessage;

    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h1>{message}</h1>
          </Col>
        </Row>
      </Container>  
    );
  }
}

export default LoaderError;