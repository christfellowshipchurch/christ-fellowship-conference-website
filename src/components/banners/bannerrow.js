import React, { Component, Children } from 'react';
import classnames from 'classnames';
import {
    Container, Row, Col
} from 'reactstrap';
import BannerImg from './bannerimg';
import BannerTitles from './bannertitles';
import BannerContent from './bannercontent';

class BannerRow extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { children } = this.props;

        const lgCol = Math.round(12 / children.length);
        const hasTitles = Children.map(children, child => 
            child.type === BannerTitles
        );
        const hasContent = Children.map(children, child => 
            child.type === BannerContent
        );

        const calculatedChildren = Children.map(children, child =>
            React.cloneElement(child, { mdCol: (hasTitles && hasContent ? "6" : "12"), lgCol: lgCol.toString() })
        );

        // TODO : Update to properly use default properties
        const bgColor = 'color' in this.props ? this.props.color : 'primary';
        const contClasses = classnames(
            this.props.className,
            'bg-' + bgColor);

        return (
            <Container fluid className={contClasses}>
                <Row>
                    {calculatedChildren}
                </Row>
            </Container>
        );
    }
}

export default BannerRow;