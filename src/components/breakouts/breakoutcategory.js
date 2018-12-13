import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {

} from 'reactstrap';
import {
    breakoutsGroupId, strip
} from '../utils';

import getBreakoutsById from '../queries/getbreakouts';
import PreLoader from '../loaders/preloader';
import LoaderError from '../loaders/loadererror';

import BreakoutDescription from './breakoutdescription';

class BreakoutCategory extends Component {

    testBreakouts = (breakouts) => {
        let rendered = [];

        for (var i = 0; i < breakouts.length; i++) {
            const breakout = breakouts[i];

            rendered.push(
                <BreakoutDescription title={breakout.name} description={breakout.description} key={i} />
            );
            rendered.push(
                <hr className="w-75"></hr>
            );
        }

        return rendered;
    }

    render() {
        const breakoutCat = this.props.match.params.category;

        return (
            <Query query={getBreakoutsById(breakoutsGroupId)} fetchPolicy="cache-and-network">
                {({ loading, error, data }) => {
                    if (loading) return <PreLoader />
                    if (error) return <LoaderError />

                    console.log("Categories: ", data);

                    const group = data.node.childGroups.find(function (n) {
                        return strip(n.name) === strip(breakoutCat);
                    });


                    return (
                        <Query query={getBreakoutsById(group.id)} fetchPolicy="cache-and-network">
                            {({ loading, error, data }) => {
                                if (loading) return <PreLoader />
                                if (error) return <LoaderError />

                                console.log("Breakouts: ", data);

                                return (
                                    <div>
                                        {this.testBreakouts(data.node.childGroups)}
                                    </div>
                                );
                            }}
                        </Query>
                    );
                }}
            </Query>
        );
    }
}

export default BreakoutCategory;
