import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

const Stage = props => {
  const lists = props.stage.lists.map(list => (
    <List key={list.id} id={list.id} title={list.title} items={list.items} />
  ));
  return <section>{lists}</section>;
};

Stage.propTypes = {
  stage: PropTypes.shape({
    lists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string,
            description: PropTypes.string
          })
        )
      })
    )
  }).isRequired
};

export default Stage;
