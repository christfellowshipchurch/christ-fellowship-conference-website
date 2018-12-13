import React        from 'react';
import { Route }    from 'react-router';
import App          from './components/App';
import Home         from './components/views/home';

export default (
    <Route path='/' component={App}>
        <Route exact component={Home} />
        <Route path='*' component={Home} />
    </Route>
);