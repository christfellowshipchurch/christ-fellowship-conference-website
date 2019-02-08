import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

import backgroundVideo from '../../assets/Background.mp4';
import bannerImg from '../../assets/Banner.png'
import stripImg from '../../assets/Strip.png';

class HeaderVideo extends Component {
    render() {
        return (
            <Container fluid className="banner-video p-0">
                <Row className="m-0 w-100 h-100">
                    <Col className="overlay p-0">
                        <video autoPlay loop muted className="video-background-primary">
                            <source type="video/mp4" src={backgroundVideo}></source>
                        </video>
                        <img src={bannerImg} className="banner" />
                        <img src={stripImg} className="strip" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HeaderVideo;