import React, { PureComponent } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReadableIcon from 'react-icons/lib/md/library-books'
import './header.css'

class Header extends PureComponent {
  render() {
    return(
      <Navbar className="readable-header">
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="readable-header__title" to="/">
                Readable<ReadableIcon />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default Header