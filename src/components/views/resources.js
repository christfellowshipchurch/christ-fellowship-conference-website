import React, { Component } from 'react';
import {
  Switch, Route
} from 'react-router-dom';

import ResourcesComingSoon from '../resources/comingsoon';

class Resources extends Component {

  render() {

    return (
      <Switch>
        <Route path="*" component={ResourcesComingSoon} />
      </Switch>
    );
  }
}

export default Resources;