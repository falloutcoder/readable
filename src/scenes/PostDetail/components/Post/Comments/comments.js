import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'

class Comments extends Component {
  componentDidMount() {
    this.props.load(this.props.id)
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Comments
