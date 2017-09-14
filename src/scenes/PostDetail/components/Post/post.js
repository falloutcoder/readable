import React, { PureComponent } from 'react'
import { Col, Grid, Row, PageHeader, Jumbotron, ButtonGroup, ButtonToolbar, Button } from 'react-bootstrap'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-o-up'
import ThumbsUpDarkIcon from 'react-icons/lib/fa/thumbs-up'
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-o-down'
import ThumbsDownDarkIcon from 'react-icons/lib/fa/thumbs-down'
import UserIcon from 'react-icons/lib/fa/user'
import CalendarIcon from 'react-icons/lib/fa/calendar'
import CommentsIcon from 'react-icons/lib/fa/comments-o'
import { formatTimeStamp } from '../../../../utils'
import Comments from './Comments/commentsContainer'
import './post.css'

class PostHeader extends PureComponent {
  render() {
    const { post } = this.props
    return (
      <div>
        <PageHeader>{ post.title }<small> ({ post.category })</small></PageHeader>
        <div className="readable-post-user"><UserIcon />
          <span> { post.author }</span>
        </div>
        <div className="readable-post-date"><CalendarIcon />
          <span> { formatTimeStamp(post.timestamp) }</span>
        </div>
        <div className="readable-post-comments"><CommentsIcon />
          <span> { post.comments.all && post.comments.all.length } </span>
        </div>
      </div>
    )
  }
}

class Post extends PureComponent {
  componentDidMount() {
    this.props.load()
  }

  render() {
    const { post } = this.props
    return (
      <div className="readable-postdetail">
       <Grid>
          <Row>
            <Col md={10} mdOffset={2}>
              <PostHeader post={ post }/>
            </Col>
          </Row>

          <Row>
            <Col md={2} className="readable-post-votes">
              <div>{ post.voteScore < 0 ? <ThumbsDownIcon /> : <ThumbsUpIcon />}</div>
              <div><span> { post.voteScore }</span></div>
            </Col>
            <Col md={10} className="readable-postdetail__post">
              <Jumbotron>
                <p>{ post.body }</p>
              </Jumbotron>
              <ButtonGroup>
                <Button onClick={ this.props.upVote }>
                  <ThumbsUpDarkIcon />
                </Button>
                <Button onClick={ this.props.downVote }>
                  <ThumbsDownDarkIcon />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col md={10} mdOffset={2}>
              <Comments id={ this.props.id }/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Post
