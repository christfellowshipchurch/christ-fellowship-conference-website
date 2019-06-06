import React from 'react';
import {
    Switch, Route
} from 'react-router-dom';

import DefaultPage, { LoadingPage, GridPage } from '../Page';

const Router = () => (
    <Switch>
        <Route exact path="/grid" component={GridPage} />
        <Route exact path="/loading" component={LoadingPage} />
        <Route exact path="/:page" component={DefaultPage} />

        <Route path="*" component={DefaultPage} />
    </Switch>
)

export default Router;