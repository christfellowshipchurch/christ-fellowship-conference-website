import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

import bannerImg from '../assets/Banner.png'
import stripImg from '../assets/Strip.png';

class Callout extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12">
                        <h1 className="text-center text-danger text-uppercase font-weight-bold">
                            {this.props.title}
                        </h1>
                    </Col>
                </Row>
                <hr className="w-75"></hr>
                <Row>
                    <Col xs="12">
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Callout;