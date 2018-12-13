import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

class BreakoutDescription extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="4" className="text-center text-md-right">
                        <h2 className="font-weight-light text-primary">
                            {this.props.title}
                        </h2>
                    </Col>

                    <Col className="text-center text-md-left">
                        <p>
                            {this.props.description}
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BreakoutDescription;