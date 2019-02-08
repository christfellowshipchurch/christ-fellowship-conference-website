import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import classnames from 'classnames';

import {
    Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class DownloadButton extends Component {
    render() {
        const textColorProp = get(this.props, "textColor") || "white";
        const textColor = `text-${textColorProp}`;
        const classes = classnames(
            "d-flex",
            "align-items-center",
            "justify-content-center",
            "w-100",
            "font-weight-bold"
        );

        return (
            <a href={this.props.url} target="_blank">
                <Button
                    color={this.props.color}
                    className={classes}
                    size="lg">
                    <FontAwesomeIcon icon={this.props.icon} size="2x" color="white" />
                    &nbsp;
                    &nbsp;
                    <span className={textColor}>
                        {this.props.text}
                    </span>
                </Button>
            </a>
        );
    }
}

export default DownloadButton;