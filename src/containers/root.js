import React from 'react';
import { Link } from 'react-static';

// react-static-routes is generated into the dist directory.
// eslint-disable-next-line
import Routes from 'react-static-routes';

import { H1 } from '../styles/Typography';

const Root = () => (
  <div>
    <nav>
      <Link to="/"><H1>Home</H1></Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </nav>
    <div className="content">
      <Routes />
    </div>
  </div>
);

export default Root;
