import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-o-up';
import ThumbsUpDarkIcon from 'react-icons/lib/fa/thumbs-up';
import ThumbsDownDarkIcon from 'react-icons/lib/fa/thumbs-down';
import UserIcon from 'react-icons/lib/fa/user';
import CalendarIcon from 'react-icons/lib/fa/calendar';
import TrashIcon from 'react-icons/lib/fa/trash-o';
import EditIcon from 'react-icons/lib/fa/edit';
import PostContainer from '../../../../../components/Post/post';
import { formatTimeStamp } from '../../../../../utils';
import './post.css';

class PostHeader extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    voteScore: PropTypes.number,
  };
  render() {
    return (
      <div className="readable-post__header">
        <Link to={`/posts/${this.props.id}`}>{this.props.title}</Link>
        <span className="pull-right">
          <UserIcon /> {this.props.author}
          <ThumbsUpIcon /> {this.props.voteScore}
        </span>
      </div>
    );
  }
}

class PostFooter extends PureComponent {
  static propTypes = {
    timestamp: PropTypes.number,
    upVote: PropTypes.func,
    downVote: PropTypes.func,
    delete: PropTypes.func,
    openEditModal: PropTypes.func,
  };
  render() {
    return (
      <div>
        <CalendarIcon /> {formatTimeStamp(this.props.timestamp)}
        <ButtonGroup className="pull-right">
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
      </div>
    );
  }
}

class Post extends PureComponent {
  static propTypes = {
    post: PropTypes.object,
    upVote: PropTypes.func,
    downVote: PropTypes.func,
    delete: PropTypes.func,
    update: PropTypes.func,
    openEditModal: PropTypes.func,
    closeEditModal: PropTypes.func,
  };

  render() {
    const post = this.props.post;
    return (
      <Panel
        header={
          <PostHeader
            title={post.title}
            id={post.id}
            voteScore={post.voteScore}
            author={post.author}
          />
        }
        className="readable-post"
        footer={
          <PostFooter
            timestamp={post.timestamp}
            upVote={this.props.upVote}
            downVote={this.props.downVote}
            delete={this.props.delete}
            openEditModal={this.props.openEditModal}
          />
        }
        bsStyle="default"
      />
    );
  }
}

export default PostContainer(Post);
