import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

import bannerImg from '../../assets/Banner.png'
import stripImg from '../../assets/Strip.png';

class HeaderImage extends Component {
    render() {
        return (
            <Container fluid className="banner-img p-0">
                <Row className="m-0 w-100 h-100">
                    <Col className="overlay p-0">
                        <img src={bannerImg} className="banner" />
                        <img src={stripImg} className="strip" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HeaderImage;