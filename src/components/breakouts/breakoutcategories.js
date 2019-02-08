import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {
    Container, Row, Col
} from 'reactstrap';
import {
    hasProperty, breakoutsGroupId
} from '../utils';

import bannerImg from '../../assets/breakouts.jpg';

import getBreakoutsById from '../queries/getbreakouts';
import PreLoader from '../loaders/preloader';
import LoaderError from '../loaders/loadererror';

import BreakoutTile from './breakouttile';

class BreakoutCategories extends Component {
    renderCategories = (categories) => {
        let renderedCats = [];

        for (var i = 0; i < categories.length; i++) {

            const c = categories[i];
            const img = c.image.sources.length > 0 && hasProperty(c.image.sources[0], "uri") ?
                c.image.sources[0].uri : "";

            renderedCats.push(
                <Col xs="12" md="4" className="p-4" key={i}>
                    <BreakoutTile title={c.name} link={c.name} img={img} />
                </Col>
            );
        }

        return renderedCats;
    }

    render() {
        return (
            <Query query={getBreakoutsById(breakoutsGroupId)} fetchPolicy="cache-and-network">
                {({ loading, error, data }) => {
                    if (loading) return <PreLoader />
                    if (error) return <LoaderError />

                    return (
                        <Container fluid>
                            <Row>
                                <Col xs="12">
                                    <img src={data.node.image.sources[0].uri} alt="Christ Fellowship Conference Breakouts" width="100%" />
                                </Col>
                            </Row>

                            <Row>
                                <Container>
                                    <Row>
                                        <Col xs="12" className="text-center text-danger">
                                            <h2>
                                                {this.props.title || 'Select a category from the list below to see the breakouts offered.'}
                                            </h2>
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    <Row>
                                        {this.renderCategories(data.node.childGroups)}
                                    </Row>
                                </Container>
                            </Row>
                        </Container>
                    );
                }}
            </Query>
        );
    }
}

export default BreakoutCategories;
