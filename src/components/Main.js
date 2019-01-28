import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';
import {
    Switch, Route
} from 'react-router-dom';

import Home from './loaders/homeloader';
import Speakers from './views/speakers';
import Breakouts from './views/breakouts';
import Schedule from './views/schedule';
import Map from './views/map';
import AppBanner from '../components/mobileapp/appbanner';

import Recap2018 from './hardcoded/2018';
import Sponsor from './hardcoded/sponsor';

import '../styles/App.css';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/breakouts" component={Breakouts} />
        <Route path="/2018" component={Recap2018} />
        <Route path="/sponsor" component={Sponsor} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/app" component={AppBanner} />
        <Route path="/map" component={Map} />

        <Route path="*" component={Home} />
    </Switch>
)

export default Main;