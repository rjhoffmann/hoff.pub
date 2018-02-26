import React from 'react';
import PropTypes from 'prop-types';
import Lowlight from 'react-lowlight';

export default ({ languages }) => {
  Object.keys(languages).forEach(language => {
    Lowlight.registerLanguage(language, languages[language]);
  });

  const Code = ({ className = '', children }) => {
    const language = className.split('-')[1] || '';
    const value = children[0] || '';
    const props = { value, inline: false };

    if (Object.keys(languages).indexOf(language) > -1) {
      // Include the language only if it was previously registered
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
