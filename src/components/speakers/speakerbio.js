import React, { Component } from 'react';
import { Query } from 'react-apollo';
import classnames from 'classnames';
import {
    Container, Row, Col
} from 'reactstrap';

import getSpeakers from '../queries/getspeakers';

import PreLoader from '../loaders/preloader';
import LoaderError from '../loaders/loadererror';

import SocialMedia from '../socialmedia';

import {
    hasProperty, condense
} from '../utils';

/**
 * name     | string
 * title    | string
 * bio      | string
 * img      | string
 */

class SpeakerBio extends Component {

    renderBio = (speaker, img) => {
        const align = hasProperty(this.props, 'align') ? this.props.align : "left";
        const alignClasses = align === "right" ? "order-md-last" : "";
        const textClasses = classnames("text-md-" + align, "text-center");
        const mdCol = img ? 8 : 12;
        const imgCol = img ?
            <Col xs="12" md={12 - mdCol} className={alignClasses}>
                <img className="w-100" src={img} />
            </Col> : '';

        return (
            <Row className="my-5 d-flex align-items-center">
                {imgCol}

                <Col xs="12" md={mdCol} className={textClasses}>
                    <h2 className="font-weight-light">
                        <span className="font-weight-bold">
                            {speaker.firstName} {speaker.lastName}
                        </span>&nbsp;
                        <small className="font-weight-light">
                            {speaker.jobTitle}
                        </small>
                    </h2>
                    <hr></hr>
                    <p>{speaker.bio}</p>
                    <SocialMedia links={speaker.socialMedia} />
                </Col>
            </Row>
        );
    }

    queryBio = () => {
        const query = !hasProperty(this.props, 'speaker');
        const speaker = query ? this.props.match.params.speaker : this.props.speaker;

        if (speaker) {
            if (query) {
                return (
                    <Query query={getSpeakers} fetchPolicy="cache-and-network">
                        {({ loading, error, data }) => {
                            if (loading) return <PreLoader />
                            if (error) return <LoaderError />

                            const speakers = data.node.childContentItemsConnection.edges.map(c => c.node);
                            const _speaker = speakers.find((s) => { return condense(s.title) === speaker });

                            return (
                                _speaker ?
                                    this.renderBio(_speaker.person, _speaker.images[0].sources[0].uri) :
                                    //this.renderBio(_speaker.person, '') :
                                    <LoaderError message="We were unable to find this speaker" />
                            );
                        }}
                    </Query>
                );
            } else {
                return (
                    this.renderBio(speaker, speaker.img)
                );
            }
        }

        return <LoaderError />
    }

    render() {
        const groupedBio = hasProperty(this.props, 'grouped');

        return (
            groupedBio ?
                this.queryBio() :
                <Container>
                    {this.queryBio()}
                </Container>
        );
    }
}

export default SpeakerBio;