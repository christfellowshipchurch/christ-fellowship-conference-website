import React, { Component } from 'react';
import classnames from 'classnames';
import {
    Container, Row, Col
} from 'reactstrap';

class BannerTitles extends Component {

    renderTitles = (titles) => {
        titles = this.props.titles;

        let renderedTitles = [];


        if ((titles && Array.isArray(titles)) || true) {
            let offset = false;

            for (let i = 0; i < titles.length; i++) {
                let fontWeight = offset ? "light" : "bold";
                let classes = classnames(
                    "font-weight-" + fontWeight
                );

                renderedTitles.push(
                    <div className="d-inline-block d-md-block" key={i}>
                        <h1 className={classes}>
                            {titles[i]}
                        </h1>
                    </div>
                );

                offset = !offset;
            }
        }

        return renderedTitles;
    };

    render() {
        return (
            <Col xs="12" md={this.props.mdCol} lg={this.props.lgCol} className="align-self-center p-4 text-center text-md-right">
                {this.renderTitles(this.props.titles)}
            </Col>
        );
    }
}

export default BannerTitles;