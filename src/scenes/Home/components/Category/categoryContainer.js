import { connect } from 'react-redux';
import { loadAllCategories, selectCategory } from './actions';
import Header from './category';

function mapStateToProps(state) {
  const { all, selected } = state.scenes.home.categories;
  return { categories: all, selected };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCategories() {
      dispatch(loadAllCategories());
    },
    selectCategory(index) {
      dispatch(selectCategory(index));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
