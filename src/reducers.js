import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { ADD_ENTITIES, SET_TOP_LEVEL_CATEGORIES } from './constants';

const entities = handleActions(
  {
    [ADD_ENTITIES]: (state, { payload }) => {
      const result = {};
      const keys = new Set([...Object.keys(state), ...Object.keys(payload)]);
      keys.forEach(key => {
        result[key] = { ...state[key], ...payload[key] };
      });
      return result;
    },
  },
  {},
);

const topLevelCategories = handleActions(
  {
    [SET_TOP_LEVEL_CATEGORIES]: (state, { payload }) => payload,
  },
  [],
);

export default combineReducers({
  entities,
  topLevelCategories,
});
