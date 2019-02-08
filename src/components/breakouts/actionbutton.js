import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import classnames from 'classnames';

import {
    Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ActionButton extends Component {
    render() {
        const textColorProp = get(this.props, "textColor") || "white";
        const textColor = `text-${textColorProp}`;
        const classes = classnames(
            "d-flex",
            "align-items-center",
            "justify-content-center",
            "font-weight-bold",
        );

        return (
            <a href={this.props.url} target="_blank" className="my-3">
                <Button
                    color={this.props.color}
                    outline
                    className={classes}>
                    <FontAwesomeIcon icon={this.props.icon} />
                    &nbsp;
                    &nbsp;
                    <span>
                        {this.props.text}
                    </span>
                </Button>
            </a>
        );
    }
}

export default ActionButton;