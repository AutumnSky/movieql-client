import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import './reset.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:movieId" component={Detail} />
        </HashRouter>
      </ApolloProvider>
    );
  }
}

export default App;
