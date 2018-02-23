import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';

import 'normalize.css';
import 'typeface-cardo';
import 'typeface-josefin-sans';
import 'typeface-source-code-pro';

import Root from './containers/root';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Root />
      </Router>
    )
  }
}

export default hot(module)(App)
