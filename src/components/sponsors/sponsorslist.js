import React, { Component } from 'react';
import {
    Query
} from 'react-apollo';
import {
    Container, Row, Col
} from 'reactstrap';

import PreLoader from '../loaders/preloader';
import LoaderError from '../loaders/loadererror';

import SponsorLink from './sponsorlink';

import getSponsors from '../queries/getsponsors';

class SponsorsList extends Component {
    renderSponsors = (sponsors) => {
        if (sponsors) {
            const renderedSponsors = [];

            for (var i = 0; i < sponsors.length; i++) {
                const sponsor = sponsors[i];

                renderedSponsors.push(
                    <Col xs="12" md="3" key={i}>
                        <SponsorLink name={sponsor.title} to={sponsor.htmlContent} img={sponsor.images[0].sources[0].uri} />
                    </Col>
                );
            }

            return renderedSponsors;
        }

        return '';
    }

    render() {
        return (
            <Query query={getSponsors} fetchPolicy="cache-and-network">
                {({ loading, error, data }) => {
                    if (loading) return <PreLoader />
                    if (error) { console.error(error); return <LoaderError />; }

                    const sponsors = data.node.childContentItemsConnection.edges.map(c => c.node);

                    console.log(sponsors);

                    return (
                        <Container fluid className="bg-white py-3">
                            <Row>
                                <Col xs="12" className="text-success text-center">
                                    <h2>
                                        Proud Sponsors of Christ Fellowship Conference 2019
                                    </h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ size: "8", offset: "2" }}>
                                    <Row>
                                        {this.renderSponsors(sponsors)}
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    )
                }}
            </Query>
        );
    }
}

export default SponsorsList;