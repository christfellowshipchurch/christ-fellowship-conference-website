import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {
    Container, Row, Col
} from 'reactstrap';

import getSpeakers from '../queries/getspeakers';

import PreLoader from '../loaders/preloader';
import LoaderError from '../loaders/loadererror';

import SpeakerBio from './speakerbio';


/**
 * speakers | array objects
 *          | * see speakerbio.js for speaker properties *
 * list     | bool
 * bios     | bool 
 * 
 * Collapse ==> false = closed
 */

class AllSpeakers extends Component {
    renderBios(speakers) {
        let renderedBios = [];
        let rightAligned = false;

        for (var i = 0; i < speakers.length; i++) {
            const speaker = speakers[i];
            const align = rightAligned ? "right" : "left";
            let _speaker = speaker.person;
            _speaker.img = speaker.images[0].sources[0].uri;
            _speaker.youTubeId = speaker.youTubeId;

            renderedBios.push(
                <SpeakerBio speaker={_speaker} key={i} align={align} grouped />
            );

            rightAligned = !rightAligned;
        }

        return renderedBios;
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
                            <Row>
                                <Col xs="12" className="text-center">
                                    <h2 className="text-danger">
                                        Thank you to our incredible speakers!
                                    </h2>
                                </Col>
                            </Row>
                            <hr className="w-75"></hr>
                            {this.renderBios(speakers)}
                        </Container>
                    );
                }}
            </Query>
        );
    }
}

export default AllSpeakers;