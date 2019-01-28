import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

import MobileApp from './views/mobileapp';
import SponsorsList from './sponsors/sponsorslist';
import SocialMedia from '../components/socialmedia';


class FooterBar extends Component {
    render() {
        return (
            <Container className="bg-secondary text-white" fluid>
                <Row className="bg-white">
                    <Col xs="12" className="p-0">
                        <MobileApp />
                        <hr></hr>
                        <SponsorsList />
                    </Col>
                </Row>
                <Row className="py-3 px-5">
                    <Col xs="12">
                        <SocialMedia className="float-left" fontSize="h3" links={[
                            { name: "facebook", url: "https://www.facebook.com/ChristFellowshipConf/", color: "light" },
                            { name: "instagram", url: "https://www.instagram.com/christfellowshipconf/", color: "light" },
                            { name: "twitter", url: "https://twitter.com/cfconf", color: "light" },
                        ]} />

                        <p className="float-right h4 font-weight-light text-center">
                            &copy; {new Date().getFullYear()} <a href="http://gochristfellowship.com" target="_blank" className="text-white text-underlined">Christ Fellowship Church</a>. All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FooterBar;