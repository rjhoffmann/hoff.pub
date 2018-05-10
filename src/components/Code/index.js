import React from 'react';
import PropTypes from 'prop-types';
import Lowlight from 'react-lowlight';

import _each from 'lodash/each';
import _keys from 'lodash/keys';
import _has from 'lodash/has';

export default ({ languages }) => {
  _each(_keys(languages), lang => {
    Lowlight.registerLanguage(lang, languages[lang]);
  });

  const Code = ({ className = '', children }) => {
    const language = className.split('-')[1] || '';
    const value = children[0] || '';
    const props = { value, inline: false };

    if(_has(languages, language)) {
      props.language = language;
    }

    return <Lowlight {...props} />
  };

  Code.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  return Code;
};
