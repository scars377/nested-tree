import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import List from '../containers/List';

const Item = ({
  id = 0,
  name = '...',
  slug = '',
  subCategories = [],
  match = {},
}) => {
  const label = (
    <span>
      [{id}] {name}
    </span>
  );

  if (!slug || subCategories.length === 0) {
    return <li>{label}</li>;
  }

  const route = `${match.url}/${slug}`.replace(/\/+/g, '/');
  return (
    <li>
      <NavLink to={route}>{label}</NavLink>
      <Route path={route} component={List} />
    </li>
  );
};

export default Item;
