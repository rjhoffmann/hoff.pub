import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import reactRenderer from 'remark-react';
import { withRouteData, Link } from 'react-static';
import _assign from 'lodash/assign';

import githubSchema from 'hast-util-sanitize/lib/github.json';
import highlightJs from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/atom-one-light.css';

import Code from '../components/Code';

const Post = ({ post }) => {
  const renderedPost = remark().use(reactRenderer, {
    sanitize: _assign({}, githubSchema, {
      attributes: _assign({}, githubSchema.attributes, {
        code: [...(githubSchema.attributes.code || []), 'className'],
      }),
    }),
    remarkReactComponents: {
      code: Code({
        languages: {
          highlightJs,
        },
      }),
    },
  }).processSync(post.content);

  return (
    <div>
      <Link to="/blog/">&gt; Back</Link>
      <br />
      <h3>{post.data.title}</h3>
      {renderedPost.contents}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default withRouteData(Post);
