import React, { Component } from 'react';
import classnames from 'classnames';
import {
    Card, CardBody, CardHeader, CardTitle
} from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';


/**
 * type     | string
 * color    | string
 * url      | string
 * price    | int or string
 */

class Ticket extends Component {
    render() {
        const cardHeaderClasses = classnames(
            'h4',
            'font-weight-light',
            'text-uppercase',
            'text-white',
            'bg-' + this.props.color);

        return (
            <div>
                <Card className="text-center my-3" outline color={this.props.color}>
                    <CardHeader className={cardHeaderClasses}>
                        {this.props.type}
                    </CardHeader>
                    <CardBody>
                        <CardTitle className="text-dark font-weight-bold h3">
                            ${this.props.price}
                        </CardTitle>
                        {ReactHtmlParser(this.props.children)}
                        <hr></hr>
                        <a href={this.props.url} className="btn btn-outline-primary" target="_blank">
                            REGISTER
                        </a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Ticket;