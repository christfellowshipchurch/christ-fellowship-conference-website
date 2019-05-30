import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import ReactPixel from 'react-facebook-pixel';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {
    BrowserRouter
} from 'react-router-dom';

import './styles/styles.scss';

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_APOLLOS_API,
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
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();