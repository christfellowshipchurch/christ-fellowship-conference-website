import React, { Component } from 'react';
import classnames from 'classnames';
import {
    Container, Row, Col
} from 'reactstrap';

class BannerImg extends Component {
    render() {
        const styles = {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }

        return (
            <Col xs="12"
                lg={{ size: this.props.lgCol, order: (this.props.align === "right" ? "last" : "first") }}
                className="col-img bg-success text-center overflow-x-hidden overflow-y-hidden p-0"
            >
                <img src={this.props.img} className="img-cover" />
            </Col>
        );
    }
}

export default BannerImg;