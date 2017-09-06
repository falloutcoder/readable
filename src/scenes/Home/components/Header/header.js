import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import ReadableIcon from 'react-icons/lib/md/library-books'
import CategoryIcon from 'react-icons/lib/md/dvr'
import './header.css'

class Header extends PureComponent {
  static propTypes = {
    category: PropTypes.array,
    selected: PropTypes.number,
    selectCategory: PropTypes.func,
    loadCategories: PropTypes.func
  }

  componentDidMount() {
    this.props.loadCategories()
  }

  render() {
    return(
      <Navbar className="readable-header">
        <Navbar.Header>
          <Navbar.Brand>
            <a onClick={ this.props.loadCategories }
               className="readable-header__title">
                Readable<ReadableIcon />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav bsStyle="tabs" activeKey={ this.props.selected } className="readable-header__categories">
          { this.props.categories.map((category, index) =>
            <NavItem key={ index }
                     onClick={ () => this.props.selectCategory(index) }
                     eventKey={ index }>
                      { category.name.toUpperCase() } <CategoryIcon />
            </NavItem>)}
        </Nav>
      </Navbar>
    )
  }
}

export default Header