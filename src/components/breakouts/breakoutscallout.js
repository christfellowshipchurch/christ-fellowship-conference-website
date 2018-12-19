import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
    Container, Row, Col,
    Button
} from 'reactstrap';
import {
    strip
} from '../utils';

import Callout from '../callout';

class BreakoutsCallout extends Component {
    render() {
        return (
            <Callout title="Breakouts">
                <div className="text-center">
                    <h3>We are excited to be offering over 50 breakouts taught by our very own Christ Fellowship staff!</h3>

                    <Link to={{
                        pathname: "/breakouts"
                    }} className="btn btn-success font-weight-bold text-white mt-5">
                        SEE ALL BREAKOUTS
                    </Link>
                </div>
            </Callout>
        );
    }
}

export default BreakoutsCallout;
