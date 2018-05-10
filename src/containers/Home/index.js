import React from 'react';

import Photo from '../../components/Photo';
import me from './me.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Photo image={me} />
      </div>
    )
  }
}

export default Home;