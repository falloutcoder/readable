import React, { PureComponent } from 'react'
import { formatTimeStamp } from '../../../../../utils'
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-o-up'
import UserIcon from 'react-icons/lib/fa/user'
import CalendarIcon from 'react-icons/lib/fa/calendar'
import './post.css'

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
    return (<div>
      <CalendarIcon /> { formatTimeStamp(post.timestamp) }
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
                   bsStyle="default" />)
  }

}

export default Post
