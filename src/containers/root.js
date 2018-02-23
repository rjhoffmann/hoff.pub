import React from 'react';
import { Link } from 'react-static';

import Routes from 'react-static-routes';

class Root extends React.Component {
  render() {
    if(this.props.isLoading) {
      return (
        <div>Loading</div>
      )
    }

    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="content">
          <Routes />
        </div>
      </div>
    )
  }
}

export default Root;