import React, { Component } from 'react';
import {
  Switch, Route
} from 'react-router-dom';

import ResourcesComingSoon from '../resources/comingsoon';
import BreakoutCategories from '../breakouts/breakoutcategories';

class Resources extends Component {

  render() {

    return (
      <Switch>
        <Route path="*" component={() => <BreakoutCategories title="Select the category to view Breakout Resources" />} />
        {/* <Route path="*" component={ResourcesComingSoon} /> */}
      </Switch>
    );
  }
}

export default Resources;