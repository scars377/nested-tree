import { normalize, denormalize } from 'normalizr';
import { category, nestedCategory } from './schemas';
import data from './data.json';

const { result, entities } = normalize(data, [nestedCategory]);

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

export const fetchCategories = async (parentId = '') => {
  const ids = !parentId ? result : entities.categories[parentId].subCategories;
  await sleep(300);
  return denormalize(ids, [category], entities);
};
