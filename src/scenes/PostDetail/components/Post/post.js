import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  ButtonGroup,
  Button,
  Col,
  Grid,
  Jumbotron,
  PageHeader,
  Row,
} from 'react-bootstrap';
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-o-up';
import ThumbsUpDarkIcon from 'react-icons/lib/fa/thumbs-up';
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-o-down';
import ThumbsDownDarkIcon from 'react-icons/lib/fa/thumbs-down';
import UserIcon from 'react-icons/lib/fa/user';
import CalendarIcon from 'react-icons/lib/fa/calendar';
import CommentsIcon from 'react-icons/lib/fa/comments-o';
import TrashIcon from 'react-icons/lib/fa/trash-o';
import EditIcon from 'react-icons/lib/fa/edit';
import Comments from './Comments/commentsContainer';
import { formatTimeStamp } from '../../../../utils';
import PostEditModal from '../../../../components/Post/postEditModal';
import './post.css';

class PostHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    timestamp: PropTypes.number,
    comments: PropTypes.object,
  };

  render() {
    const props = this.props;
    return (
      <div>
        <PageHeader>
          {props.title}
          <small> ({props.category})</small>
        </PageHeader>
        <div className="readable-post-user">
          <UserIcon />
          <span> {props.author}</span>
        </div>
        <div className="readable-post-date">
          <CalendarIcon />
          <span> {formatTimeStamp(props.timestamp)}</span>
        </div>
        <div className="readable-post-comments">
          <CommentsIcon />
          <span> {props.comments.all && props.comments.all.length} </span>
        </div>
      </div>
    );
  }
}

class Post extends PureComponent {
  static propTypes = {
    post: PropTypes.object,
    load: PropTypes.func,
    delete: PropTypes.func,
    update: PropTypes.func,
    openEditModal: PropTypes.func,
    closeEditModal: PropTypes.func,
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { post } = this.props;
    if (post.deleted !== false) {
      return (
        <div className="container">
          <Alert bsStyle="danger">
            <strong>Ahhh Snap!!!</strong> This post is deleted or no longer
            available...
          </Alert>
        </div>
      );
    }
    return (
      <div className="readable-postdetail">
        {post.editPostModal && (
          <PostEditModal
            post={this.props.post}
            close={this.props.closeEditModal}
            update={this.props.update}
          />
        )}
        <Grid>
          <Row>
            <Col md={10} mdOffset={2}>
              <PostHeader
                title={post.title}
                author={post.author}
                category={post.category}
                timestamp={post.timestamp}
                comments={post.comments}
              />
            </Col>
          </Row>

          <Row>
            <Col md={2} className="readable-post-votes">
              <div>
                {post.voteScore < 0 ? <ThumbsDownIcon /> : <ThumbsUpIcon />}
              </div>
              <div>
                <span> {post.voteScore}</span>
              </div>
            </Col>
            <Col md={10} className="readable-postdetail__post">
              <Jumbotron>
                <p>{post.body}</p>
              </Jumbotron>
              <ButtonGroup>
                <Button onClick={this.props.upVote}>
                  <ThumbsUpDarkIcon />
                </Button>
                <Button onClick={this.props.downVote}>
                  <ThumbsDownDarkIcon />
                </Button>
                <Button onClick={this.props.delete}>
                  <TrashIcon />
                </Button>
                <Button onClick={this.props.openEditModal}>
                  <EditIcon />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col md={10} mdOffset={2}>
              <Comments id={this.props.id} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Post;
