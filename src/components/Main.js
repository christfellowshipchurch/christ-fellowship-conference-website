import React, { Component } from 'react';
import {
    Container, Row, Col
}                           from 'reactstrap';
import {
    Switch, Route
}                           from 'react-router-dom';

import Home                 from './loaders/homeloader';
import Speakers             from './views/speakers';
import Breakouts            from './views/breakouts';

import '../styles/App.css';

const Main = () => (
    

    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/breakouts" component={Breakouts} />

        <Route path="*" component={Home} />
    </Switch>
)

export default Main;