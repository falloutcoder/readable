import { connect } from 'react-redux';
import { loadAllCategories, selectCategory }  from '../../../../data/categories/actions';
import Header from './header'

function mapStateToProps(state) {
  const { all, selected } = state.data.categories
  return { categories: all, selected }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadCategories() {
      dispatch(loadAllCategories());
    },
    selectCategory(index) {
      dispatch(selectCategory(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)