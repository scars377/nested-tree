import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeGetCategoryByID } from '../selectors';
import Item from '../components/Item';

const mapStateToProps = (state, { id }) => ({
  ...makeGetCategoryByID(id)(state),
});

export default withRouter(connect(mapStateToProps)(Item));
