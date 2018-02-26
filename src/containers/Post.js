import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import { withRouteData, Link } from 'react-static';
import _assign from 'lodash/assign';

import githubSchema from 'hast-util-sanitize/lib/github.json';
import highlight_js from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/atom-one-light.css';

import Code from '../components/Code';

class Post extends React.Component {
  render() {
    const { post } = this.props;

    const renderedPost = remark().use(reactRenderer, {
      sanitize: _assign({}, githubSchema, {
        attributes: _assign({}, githubSchema.attributes, {
          code: [...(githubSchema.attributes.code || []), 'className']
        })
      }),
      remarkReactComponents: {
        code: Code({
          languages: {
            highlight_js
          }
        })
      }
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
