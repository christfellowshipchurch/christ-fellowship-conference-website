import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
    strip
} from '../utils';

class BreakoutCategory extends Component {
    renderLink = (link, title) => (
        link ?
            <Link to={'/breakouts/' + link} className={link}>
                LEARN MORE
            </Link> : ""
    );

    render() {
        const title = this.props.title;
        const img = this.props.img;
        const toLink = this.props.link ? strip(this.props.link) : false;
        const classes = classnames(
            "btn",
            "btn-outline-primary",
            "text-uppercase",
            "font-weight-bold",
            "w-100"
        );

        return (
            <Card>
                <CardImg top width="100%" src={img} alt={title} />
                <CardBody>
                    <CardTitle>
                        {title}
                    </CardTitle>

                    {this.renderLink(toLink, title)}
                </CardBody>
            </Card>
        );
    }
}

export default BreakoutCategory;
