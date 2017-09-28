import { connect } from 'react-redux';
import { loadAllCategories } from './actions';
import Header from './category';

function mapStateToProps(state) {
  const categories = state.scenes.home.categories;
  return { categories };
}

export default connect(mapStateToProps, { loadCategories: loadAllCategories })(
  Header,
);
