import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {

} from 'reactstrap';
import {
    strip
} from '../utils';

class BreakoutCategory extends Component {
    render() {
        const title = this.props.title;
        const toLink = this.props.link ? strip(this.props.link) : false;
        const classes = classnames(
            "btn",
            "btn-outline-primary",
            "text-uppercase",
            "font-weight-bold",
            "w-100"
        );

        return (
            toLink ?
                <Link to={toLink} className={classes}>
                    {title}
                </Link> :
                <div className={classes}>
                    {title}
                </div>
        );
    }
}

export default BreakoutCategory;
