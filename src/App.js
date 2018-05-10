import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';

import 'normalize.css';
import 'typeface-cardo'; // eslint-disable-line import/extensions
import 'typeface-josefin-sans'; // eslint-disable-line import/extensions
import 'typeface-fira-code'; // eslint-disable-line import/extensions

import Root from './containers/root';

const App = () => <Router><Root /></Router>;

export default hot(module)(App);
