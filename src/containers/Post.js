import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import { withRouteData, Link } from 'react-static';

class Post extends React.Component {
  render() {
    const { post } = this.props;
    const renderedPost = remark().use(reactRenderer, {

    }).processSync(post.content);

    return (
      <div>
        <Link to="/blog/">{'<'} Back</Link>
        <br />
        <h3>{post.data.title}</h3>
        {renderedPost.contents}
      </div>
    )
  }
}

export default withRouteData(Post);
