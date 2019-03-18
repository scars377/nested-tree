import { normalize } from 'normalizr';
import { category } from './schemas';
import { createAction } from 'redux-actions';
import { ADD_ENTITIES, SET_TOP_LEVEL_CATEGORIES } from './constants';
import * as api from './api';

export const addEntities = createAction(ADD_ENTITIES);
export const setTopLevelCategories = createAction(SET_TOP_LEVEL_CATEGORIES);

export const fetchCategories = parentId => async dispatch => {
  const categories = await api.fetchCategories(parentId);
  const { result, entities } = normalize(categories, [category]);
  dispatch(addEntities(entities));
  if (!parentId) dispatch(setTopLevelCategories(result));
};
