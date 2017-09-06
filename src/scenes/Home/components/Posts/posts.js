import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Posts extends PureComponent {
  static propTypes = {
    posts: PropTypes.array,
    selectedCategory: PropTypes.string,
    loadPosts: PropTypes.func,
    loadPostsForCategory: PropTypes.func
  }

  componentDidMount() {
    this.props.loadPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCategory !== this.props.selectedCategory) {
      if (nextProps.selectedCategory) {
        this.props.loadPostsForCategory(nextProps.selectedCategory)
      }
      else {
        this.props.loadPosts()
      }
    }
  }

  render() {
    return <ul>{ this.props.posts.map(post => <li key={ post.id }>{ post.title }</li>) }</ul>
  }
}

export default Posts