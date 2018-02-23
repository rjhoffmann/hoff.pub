import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';

import WebfontLoader from '@dr-kobros/react-webfont-loader';

import 'normalize.css';

import Root from './containers/root';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      webfont: {
        google: {
          families: [
            'Cardo:400,400i,700',
            'Josefin Sans:100,100i,300,300i,400,400i,600,600i,700,700i'
          ]
        }
      },
      isLoading: true,
    };

    this.webfontCallback = this.webfontCallback.bind(this);
  }

  webfontCallback(status) {
    this.setState({ isLoading: status === 'loading' })
  }

  render() {
    return (
      <WebfontLoader config={this.state.webfont} onStatus={this.webfontCallback}>
        <Router>
          <Root isLoading={this.state.isLoading} />
        </Router>
      </WebfontLoader>
    )
  }
}

export default hot(module)(App)
