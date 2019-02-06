import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {
    Container, Row, Col
} from 'reactstrap';

import graphic from '../../assets/resources/leafgraphic.png';

class ResourcesComingSoon extends Component {
    render() {
        return (
            <Container className="resourcesView py-5">
                <Row>
                    <Col xs="12" className="text-center">
                        <img
                            className="w-50"
                            src={graphic}
                            alt="Leaf Graphic Christ Fellowship Conference 2019" />
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' className="text-center">
                        <h3 className="text-primary">
                            All resources from Christ Fellowship Conference 2019 will be made available here!
                            <br></br>
                            <small className="text-warning">
                                Check back soon for updates.
                            </small>
                        </h3>
                    </Col>
                </Row>
                <hr></hr>
            </Container>
        );
    }
}

export default ResourcesComingSoon;