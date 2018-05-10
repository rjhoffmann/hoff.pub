import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData, Link } from 'react-static';

const Blog = ({ posts }) => (
  <div>
    <h1>It is blog time.</h1>
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
);

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default withRouteData(Blog);
