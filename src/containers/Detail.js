import { connect } from 'react-redux';
import Detail from '../components/Detail';
import { makeGetCategoryBySlug } from '../selectors';

const mapStateToProps = (state, { match }) => {
  const slug = match.url.replace(/^.*\/(.*)$/, '$1');
  return {
    data: makeGetCategoryBySlug(slug)(state),
  };
};

export default connect(mapStateToProps)(Detail);
