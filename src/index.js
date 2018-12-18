import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import './styles/index.css'
import './themes/2019/conference-2019-theme.scss'
import './fonts/gotham/htf/gotham-htf.css'
import './fonts/gotham/condensed/gotham-condensed.css'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import {
    BrowserRouter
} from 'react-router-dom'

const httpLink = createHttpLink({
    uri: 'https://conference-apollos-api.herokuapp.com/',
    //uri: 'http://localhost:4000',
    opts: {
        credentials: 'same-origin',
        mode: "no-cors",
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
