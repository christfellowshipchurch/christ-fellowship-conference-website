import React from 'react';
import {
    Switch, Route, Redirect
} from 'react-router-dom';

import DefaultPage, {
    LoadingPage,
    GridPage,
    FooterPage,
    Categories,
    Sessions,
    MapPage
} from '../Page'
import { redirectTo } from '../../utils'

const SessionsPropRouter = ({ match: { params: { category } } }) =>
    <Sessions category={category} />

const RedirectToOutideLink = ({ to }) => {
    redirectTo(to)

    return null
}

const Router = () => (
    <Switch>
        {/* Breakouts */}
        <Route exact path="/breakouts" component={Categories} />
        <Route exact path="/breakouts/:category" component={SessionsPropRouter} />

        {/* Year Specific Redirects */}
        <Route exact path="/2021">
            <RedirectToOutideLink to="https://christfellowship.brushfire.com/christ-fellowship-conference/464162" />
        </Route>

        <Route exact path="/footer" component={FooterPage} />
        <Route exact path="/grid" component={GridPage} />
        <Route exact path="/loading" component={LoadingPage} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/:page" component={DefaultPage} />

        <Route path="*" component={DefaultPage} />
    </Switch>
)

export default Router;