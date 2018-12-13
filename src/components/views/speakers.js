import React, { Component } from 'react';
import { 
    Switch, Route
}                           from 'react-router-dom';

import AllSpeakers          from '../speakers/allspeakers';
import SpeakerBio           from '../speakers/speakerbio';


/**
 * speakers | array objects
 *          | * see speakerbio.js for speaker properties *
 * list     | bool
 * bios     | bool 
 * 
 * Collapse ==> false = closed
 */

class Speakers extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/speakers' component={AllSpeakers} />
                <Route path='/speakers/:speaker' component={SpeakerBio} />

                <Route path="*" component={AllSpeakers} />
            </Switch>
        );
    }
}

export default Speakers;