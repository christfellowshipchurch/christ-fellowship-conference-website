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
        const buttonText = this.props.buttonText ||
            'SEE ALL BREAKOUTS';
        const copy =
            this.props.content ||
            'We are excited to be offering over 50 breakouts taught by our very own Christ Fellowship staff!';
        return (
            <Callout title={this.props.title || "Breakouts"}>
                <div className="text-center">
                    <h3>
                        {copy}
                    </h3>

                    <Link to={{
                        pathname: this.props.link || "/breakouts"
                    }} className="btn btn-success font-weight-bold text-white mt-5">
                        {buttonText}
                    </Link>
                </div>
            </Callout>
        );
    }
}

export default BreakoutsCallout;
