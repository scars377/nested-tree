import { connect } from 'react-redux';
import List from '../components/List';
import { makeGetCategoryBySlug } from '../selectors';
import { fetchCategories } from '../actions';

const mapStateToProps = (state, { match }) => {
  const slug = match.url.replace(/^.*\/(.*)$/, '$1');
  const parentCategory = makeGetCategoryBySlug(slug)(state);
  return {
    parentId: parentCategory.id,
    items: parentCategory.subCategories,
  };
};

const mapDispatchToProps = {
  fetchCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
