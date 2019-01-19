import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {
    Container, Row, Col
} from 'reactstrap';

import getSpeakers from '../queries/getspeakers';

import PreLoader from '../loaders/preloader';
import LoaderError from '../loaders/loadererror';

import SpeakerTile from './speakertile';
import { hasProperty } from '../utils';


/**
 * speaker  | object
 *          | * see speakertilecontent.js for speaker properties *
 * collapse | string
 */

class SpeakerList extends Component {
    renderTiles = (speakers) => {
        let renderedTiles = [];

        if (speakers) {
            for (var i = 0; i < speakers.length; i++) {
                let speaker = speakers[i];

                speaker.img = '';
                speaker.img = speaker.images[0].sources[0].uri;

                renderedTiles.push(
                    <Col xs="12" md="4" key={i} className="mt-3">
                        <SpeakerTile speaker={speaker} />
                    </Col>
                );
            }

            return renderedTiles;
        }
    }

    render() {
        return (
            <Query query={getSpeakers} fetchPolicy="cache-and-network">
                {({ loading, error, data }) => {
                    if (loading) return <PreLoader />
                    if (error) return <LoaderError />


                    const speakers = data.node.childContentItemsConnection.edges.map(c => c.node);

                    return (
                        <Container>
                            <Row className="d-flex justify-content-center">
                                {this.renderTiles(speakers)}
                            </Row>
                        </Container>
                    );
                }}
            </Query>
        );
    }
}

export default SpeakerList;