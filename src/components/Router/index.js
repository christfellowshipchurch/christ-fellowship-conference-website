import React from 'react';
import {
    Switch, Route
} from 'react-router-dom';

import DefaultPage, {
    LoadingPage,
    GridPage,
    FooterPage,
    Categories,
    Sessions,
} from '../Page'

const SessionsPropRouter = ({ match: { params: { category } } }) =>
    <Sessions category={category} />

const Router = () => (
    <Switch>
        {/* Breakouts */}
        <Route exact path="/breakouts" component={Categories} />
        <Route exact path="/breakouts/:category" component={SessionsPropRouter} />

        <Route exact path="/footer" component={FooterPage} />
        <Route exact path="/grid" component={GridPage} />
        <Route exact path="/loading" component={LoadingPage} />
        <Route exact path="/:page" component={DefaultPage} />

        <Route path="*" component={DefaultPage} />
    </Switch>
)

export default Router;