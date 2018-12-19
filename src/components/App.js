import React, { Component } from 'react';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import {
  Container, Row, Col
} from 'reactstrap';
import {
  HashRouter, Switch, Route, Link
} from 'react-router-dom';

import Main from './Main';
import NavigationBar from './navigationbar';
import FooterBar from './footerbar';

class App extends Component {
  init() {
    window.scrollTo(0, 0);

    this.initializeReactGA();
    this.initializeFacebookPixel();
  }

  initializeReactGA() {
    ReactGA.initialize('AW-876488969');
    console.log(window.location.pathname);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  initializeFacebookPixel() {
    const advancedMatching = {};
    const options = {
      autoConfig: true,
      debug: false,
    };
    ReactPixel.init('1598486830259321', advancedMatching, options);

    ReactPixel.pageView();
  }

  render() {
    this.init();

    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar />
        </header>

        <div className="App-body">

          <Main />

        </div>

        <footer>
          <FooterBar />
        </footer>
      </div>
    );
  }
}

export default App;