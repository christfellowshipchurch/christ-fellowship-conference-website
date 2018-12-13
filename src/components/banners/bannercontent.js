import React, { Component } from 'react';
import classnames from 'classnames';
import {
    Container, Row, Col
} from 'reactstrap';

class BannerContent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Col xs="12" md="6" lg="4" className="align-self-center pb-4 pt-4 text-center text-md-left copy">
                <p className="mb-0">
                    {this.props.children}
                </p> 
            </Col>
        );
    }
}

export default BannerContent;