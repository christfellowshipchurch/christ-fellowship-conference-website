import React, { Component }     from 'react';
import { 
  Container, Row, Col 
}                               from 'reactstrap';
import {
  HashRouter, Switch, Route, Link
}                               from 'react-router-dom';

import Main                     from './Main';
import NavigationBar            from './navigationbar';
import FooterBar                from './footerbar';

class App extends Component {
  render() {
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