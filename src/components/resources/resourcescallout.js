import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {
    Container, Row, Col
} from 'reactstrap';

import BreakoutsCallout from '../breakouts/breakoutscallout';

class ResourcesComingSoon extends Component {
    render() {
        return (
            <BreakoutsCallout
                title="Conference doesn't have to end!"
                content='Breakout resources available now. General session messages and breakout audio files coming soon.'
                buttonText='VIEW RESOURCES'
                link='/resources' />
        );
    }
}

export default ResourcesComingSoon;