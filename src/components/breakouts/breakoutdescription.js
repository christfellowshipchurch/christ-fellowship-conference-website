import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faDownload, faLink
} from '@fortawesome/free-solid-svg-icons';

import ActionButton from './actionbutton';

class BreakoutDescription extends Component {
    render() {
        console.log(this.props.slideshowPresentation);
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
                <Row className="my-0">
                    <Col xs="12" md={{ size: 8, offset: 4 }}>
                        <Row>
                            {this.props.slideshowPresentation && typeof this.props.slideshowPresentation === 'string' ?
                                <Col className="d-flex justify-content-center">
                                    <ActionButton
                                        icon={faDownload}
                                        text="slideshow presentation"
                                        color="success"
                                        textColor="white"
                                        url={this.props.slideshowPresentation} />
                                </Col> : null}
                            {this.props.audioRecording && typeof this.props.audioRecording === 'string' ?
                                <Col className="d-flex justify-content-center">
                                    <ActionButton
                                        icon={faDownload}
                                        text="breakout audio"
                                        color="warning"
                                        textColor="white"
                                        url={this.props.audioRecording} />
                                </Col> : null}
                            {this.props.additionalResources && typeof this.props.additionalResources === 'string' ?
                                <Col className="d-flex justify-content-center">
                                    <ActionButton
                                        icon={faLink}
                                        text="additional resources"
                                        color="danger"
                                        textColor="white"
                                        url={this.props.additionalResources} />
                                </Col> : null}
                        </Row>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default BreakoutDescription;