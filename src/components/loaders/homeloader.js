import React, { Component } from 'react';
import { BrowserRouter }    from 'react-router-dom';
import { Query }            from 'react-apollo';

import getBanners           from '../queries/getbanners';

import PreLoader            from './preloader';
import LoaderError          from './loadererror';

import Home                 from '../views/home';

class HomeLoader extends Component {
  render() {
    return (
      <Query query={getBanners} fetchPolicy="cache-and-network">
        {({ loading, error, data }) => {
          if (loading) return <PreLoader />
          if (error) return <LoaderError />

          const banners = data.node.childContentItemsConnection.edges.map(c => c.node);

          return (
            <Home banners={banners} />
          );
        }}
      </Query>
    );
  }
}

export default HomeLoader;