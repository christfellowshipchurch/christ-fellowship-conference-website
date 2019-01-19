import React, { Component } from 'react';
import classnames from 'classnames';
import {
    Card, CardBody, CardHeader, CardTitle
} from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

class ScheduleItem extends Component {
    render() {
        return (
            <li className="list-group-item">
                <p className="m-0">
                    {this.props.title}
                </p>
                <h4 className="m-0 text-warning">
                    {this.props.dateTime}
                </h4>

            </li>
        );
    }
}

export default ScheduleItem;