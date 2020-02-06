import React from 'react';
import {
  Switch, Route
} from 'react-router-dom';

import Router from './components/Router/index'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MapPage from './components/Page/Map'
import SEO from './seo';

const App = () => {
  window.scrollTo(0, 0)

  return (
    <div className="App">
      <SEO />

      <Navbar />

      <div className="App-body">
        <Router />
      </div>

      <Footer />
    </div>
  )
}

export default () => <Switch>
  <Route exact path="/map-mobile" component={MapPage} />

  <Route path="*" component={App} />
</Switch>;
