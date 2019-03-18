import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import { category } from './schemas';

const getEntities = state => state.entities;
const getTopLevelCategories = state => state.topLevelCategories;

export const makeGetCategoryByID = id =>
  createSelector(
    getEntities,
    entities => denormalize(id, category, entities),
  );

export const makeGetCategoryBySlug = slug =>
  createSelector(
    getEntities,
    getTopLevelCategories,
    (entities, topLevel) =>
      slug
        ? Object.values(entities.categories || {}).find(c => c.slug === slug)
        : { subCategories: topLevel },
  );
