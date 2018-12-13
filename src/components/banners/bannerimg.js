import React, { Component } from 'react';
import classnames from 'classnames';
import {
    Container, Row, Col
} from 'reactstrap';

class BannerImg extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Col xs="12" lg={{ size: this.props.lgCol, order: (this.props.align === "right" ? "last" : "first") }} className="col-img bg-success">
                { 
                    // TODO : Add img
                }
            </Col>
        );
    }
}

export default BannerImg;