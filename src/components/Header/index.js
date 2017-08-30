import React, { PureComponent } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import QuoteIcon from 'react-icons/lib/md/library-books'
import './index.css'

class Header extends PureComponent {
  render() {
    return(
      <Navbar className="readable-header">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" className="readable-header__title">Readable<QuoteIcon /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav bsStyle="tabs" activeKey="1" className="readable-header__categories">
          <NavItem eventKey="1" href="/home">All</NavItem>
          <NavItem eventKey="2" href="/home">React</NavItem>
          <NavItem eventKey="3" title="Item">Redux</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header