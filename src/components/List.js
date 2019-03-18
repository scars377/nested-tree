import React, { useEffect } from 'react';
import Item from '../containers/Item';

const List = ({ parentId, fetchCategories, items }) => {
  useEffect(() => {
    fetchCategories(parentId);
  }, [parentId]);
  return (
    <ul>
      {items.map(id => (
        <Item key={id} id={id} />
      ))}
    </ul>
  );
};

export default List;
