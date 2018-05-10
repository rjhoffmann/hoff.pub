import React from 'react';
import PropTypes from 'prop-types';

import { Circle } from '../../styles/Blocks';

const Photo = ({ image }) => <Circle diameter={250} background={image} />;

Photo.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Photo;
