import React from 'react'
import { withRouteData, Link } from 'react-static'

class Blog extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <h1>It's blog time.</h1>
        <br />
        All Posts:
        <ul>
          {posts.map(post => (
            <li key={post.data.slug}>
              <Link to={`/blog/post/${post.data.slug}/`}>{post.data.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouteData(Blog);
