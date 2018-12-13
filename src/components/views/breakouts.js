import React, { Component } from 'react';
import {
    Switch, Route
} from 'react-router-dom';

import BreakoutCategories from '../breakouts/breakoutcategories';
import BreakoutCategory from '../breakouts/breakoutcategory';

class Breakouts extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/breakouts' component={BreakoutCategories} />
                <Route path='/breakouts/:category' component={BreakoutCategory} />

                <Route path="*" component={BreakoutCategories} />
            </Switch>
        );
    }
}

export default Breakouts;