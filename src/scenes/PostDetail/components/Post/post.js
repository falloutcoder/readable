import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'
import Comments from './Comments/commentsContainer'

class Post extends Component {
  componentDidMount() {
    this.props.load(this.props.id)
  }

  render() {
    return (
      <div>
        <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
        <Comments id={ this.props.id }/>
      </div>
    );
  }
}

export default Post
