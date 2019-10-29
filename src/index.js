import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { ClientProvider } from './client'

import {
    BrowserRouter
} from 'react-router-dom'

import '@christfellowshipchurch/web-fonts/lib/gotham/gotham.font.css'
import './styles/styles.scss'

ReactDOM.render(
    <ClientProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ClientProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();