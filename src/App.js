import React from 'react';
import Router from './components/Router/index';
import SEO from './seo';

const App = () => {
  window.scrollTo(0, 0)

  return (
    <div className="App">
      <SEO />
      <div className="App-body">
        <Router />
      </div>
    </div>
  )
}

export default App;
