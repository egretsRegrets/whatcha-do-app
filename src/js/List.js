import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = props => {
  const items = props.items.map(item => (
    <Item key={item.id} id={item.id} title={item.title} description={item.description} />
  ));
  return (
    <section>
      <h3>{props.title}</h3>
      {items}
      <pre>{props.id}</pre>
    </section>
  );
};

List.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
};

List.defaultProps = {
  title: '',
  items: []
};

export default List;
