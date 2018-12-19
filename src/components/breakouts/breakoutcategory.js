import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {
    Container, Row, Col
} from 'reactstrap';
import {
    breakoutsGroupId, strip
} from '../utils';

import getBreakoutsById from '../queries/getbreakouts';
import PreLoader from '../loaders/preloader';
import LoaderError from '../loaders/loadererror';

import BreakoutDescription from './breakoutdescription';

class BreakoutCategory extends Component {

    renderBreakouts = (breakouts) => {
        let rendered = [];

        for (var i = 0; i < breakouts.length; i++) {
            const breakout = breakouts[i];

            rendered.push(
                <hr className="w-75"></hr>
            );
            rendered.push(
                <BreakoutDescription title={breakout.name} description={breakout.description} key={i} />
            );
        }

        return rendered;
    }

    breakoutCategory = {};

    render() {
        const breakoutCat = this.props.match.params.category;
        console.log("Category: ", breakoutCat);

        return (
            <Query query={getBreakoutsById(breakoutsGroupId)} fetchPolicy="cache-and-network">
                {({ loading, error, data }) => {
                    if (loading) return <PreLoader />
                    if (error) return <LoaderError />

                    console.log("Categories: ", data);

                    const group = data.node.childGroups.find(function (n) {
                        return strip(n.name) === strip(breakoutCat);
                    });

                    this.breakoutCategory = group;

                    return (
                        group ?
                            <Query query={getBreakoutsById(group.id)} fetchPolicy="cache-and-network">
                                {({ loading, error, data }) => {
                                    if (loading) return <PreLoader />
                                    if (error) return <LoaderError message={JSON.stringify(error)} />

                                    console.log("Breakouts: ", data);

                                    return (
                                        <Container fluid>
                                            <Row>
                                                <Col xs="12">
                                                    <img src={this.breakoutCategory.image.sources[0].uri} alt={this.breakoutCategory.name} className="w-100" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs="12" className="text-danger text-center">
                                                    <h1>
                                                        {this.breakoutCategory.name}
                                                    </h1>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs="12">
                                                    {this.renderBreakouts(data.node.childGroups)}
                                                </Col>
                                            </Row>
                                        </Container>
                                    );
                                }}
                            </Query> :
                            <LoaderError message="We were unable to find this breakout" />
                    );
                }}
            </Query>
        );
    }
}

export default BreakoutCategory;
