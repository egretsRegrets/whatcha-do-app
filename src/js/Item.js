import React from 'react';
import PropTypes from 'prop-types';

const Item = props => (
  <div>
    <h5>{props.title}</h5>
    <p>{props.description}</p>
    <pre>{props.id}</pre>
  </div>
);

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
};

Item.defaultProps = {
  title: 'What am I?',
  description: ''
};

export default Item;
