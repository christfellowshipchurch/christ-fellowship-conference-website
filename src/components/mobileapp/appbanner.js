import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import classnames from 'classnames';

import {
    Container, Row, Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/**
 * type     | string
 * color    | string
 * url      | string
 * price    | int or string
 */

class AppBanner extends Component {
    render() {
        return (
            <Container fluid className="app-banner">

            </Container>
        );
    }
}

export default AppBanner;