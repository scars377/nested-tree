const faker = require('faker');
const fs = require('fs');
const path = require('path');

let id = 1;

const randLen = () => 3 + parseInt(Math.random() * 3, 10);

const createCategories = (level = 0) => {
  if (level > 3) return [];
  const result = Array.from({ length: randLen() });
  return result.map(() => createCategory(level));
};

const createCategory = (level = 0) => {
  const name = faker.commerce.productName();
  return {
    id: id++,
    name,
    slug: faker.helpers.slugify(name),
    subCategories: createCategories(level + 1),
    price: faker.commerce.price(),
  };
};

const data = createCategories();

fs.writeFileSync(
  path.resolve(__dirname, './src/data.json'),
  JSON.stringify(data),
  'utf8',
);
