import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Panel, Grid, Row, Col, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-o-up'
import UserIcon from 'react-icons/lib/fa/user'
import CalendarIcon from 'react-icons/lib/fa/calendar'
import Sorter from './Sorter/sorterContainer'
import './posts.css'

class PostHeader extends PureComponent {
  static propTypes = {
    post: PropTypes.object
  }
  render() {
    const post = this.props.post
    return (<div className="readable-post__header">
      <Link to={ `/posts/${ post.id }` }>{ post.title }</Link>
      <span className="pull-right"> <UserIcon /> { post.author }</span>
    </div>)
  }
}

class PostFooter extends PureComponent {
  static propTypes = {
    post: PropTypes.object
  }
  render() {
    const post = this.props.post
    const timeStamp = new Date(parseInt(post.timestamp, 10))
    return (<div>
      <CalendarIcon /> { timeStamp.toLocaleString() }
      <span className="pull-right"> {post.voteScore} <ThumbsUpIcon /></span>
    </div>)
  }
}

class Post extends PureComponent {
  static propTypes = {
    post: PropTypes.object
  }

  render() {
    const post = this.props.post
    return (<Panel header={<PostHeader post={ post } />}
                   className="readable-post"
                   footer={<PostFooter post={ post } />}
                   bsStyle="default">
              { post.body }</Panel>)
  }

}

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
    return(
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <ol className="readable-posts">
              { this.props.posts.map(post => <li key={ post.id }><Post post= { post } /></li>) }
            </ol>
            { !this.props.posts.length && <Alert bsStyle="danger">
              <strong>Ahhh Snap!!!</strong> No posts found for this category...</Alert> }
          </Col>
          <Col xs={6} md={4}><Sorter /></Col>
        </Row>
      </Grid>
    )
  }
}

export default Posts