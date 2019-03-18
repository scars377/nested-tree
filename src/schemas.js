import { schema } from 'normalizr';

export const category = new schema.Entity('categories');

export const nestedCategory = new schema.Entity('categories');
nestedCategory.define({
  subCategories: [nestedCategory],
});
