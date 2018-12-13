import React, { Component } from 'react';
import {
    Container, Row, Col
}                           from 'reactstrap';
import SocialMedia          from '../components/socialmedia';

{/**
* TODO : pull in all links from a dynamically set/defined data source
*/}

class FooterBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="py-3 px-5 bg-secondary text-white" fluid>
                <Row>
                    <Col xs="12">
                        <SocialMedia className="float-left" fontSize="h3" links={[
                            { name: "facebook", url: "https://www.facebook.com/ChristFellowshipConf/", color: "light"},
                            { name: "instagram", url: "https://www.instagram.com/christfellowshipconf/", color: "light"},
                            { name: "twitter", url: "https://twitter.com/cfconf", color: "light"},
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