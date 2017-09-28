import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ReadableIcon from 'react-icons/lib/md/library-books';
import CategoryIcon from 'react-icons/lib/md/dvr';
import './category.css';

class Category extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    categories: PropTypes.array,
    selectedCategory: PropTypes.string,
    loadCategories: PropTypes.func,
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    return (
      <Navbar className="readable-header">
        <Navbar.Header>
          <Navbar.Brand>
            <Link
              to="/"
              onClick={this.props.loadCategories}
              className="readable-header__title"
            >
              Readable<ReadableIcon />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav
          bsStyle="tabs"
          activeKey={this.props.selectedCategory}
          className="readable-header__categories"
        >
          {this.props.categories.map(category => (
            <NavItem
              key={category.name}
              eventKey={category.name}
              onClick={() => this.props.history.push(`/${category.name}`)}
            >
              {category.name.toUpperCase()} <CategoryIcon />
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    );
  }
}

export default Category;
