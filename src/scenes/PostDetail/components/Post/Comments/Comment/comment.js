import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-o-up';
import ThumbsUpDarkIcon from 'react-icons/lib/fa/thumbs-up';
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-o-down';
import ThumbsDownDarkIcon from 'react-icons/lib/fa/thumbs-down';
import UserIcon from 'react-icons/lib/fa/user';
import CalendarIcon from 'react-icons/lib/fa/calendar';
import TrashIcon from 'react-icons/lib/fa/trash-o';
import { formatTimeStamp } from '../../../../../../utils';
import './comment.css';

class CommentHeader extends PureComponent {
  static propTypes = {
    author: PropTypes.string,
    date: PropTypes.string,
    votes: PropTypes.number,
    upVote: PropTypes.func,
    downVote: PropTypes.func,
    delete: PropTypes.func,
  };

  render() {
    return (
      <div>
        <span>
          <UserIcon /> {this.props.author}
          {' | '}
        </span>
        <span>
          <CalendarIcon /> {this.props.date}
          {' | '}
        </span>
        <span>
          {this.props.votes < 0 ? <ThumbsDownIcon /> : <ThumbsUpIcon />}{' '}
          {this.props.votes}
        </span>
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
        </ButtonGroup>
      </div>
    );
  }
}

class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.object,
    upVote: PropTypes.func,
    downVote: PropTypes.func,
    delete: PropTypes.func,
  };

  render() {
    const { comment } = this.props;
    return (
      <Panel
        className="readable-post-comment"
        header={
          <CommentHeader
            author={comment.author}
            date={formatTimeStamp(comment.timestamp)}
            votes={comment.voteScore}
            upVote={this.props.upVote}
            downVote={this.props.downVote}
            delete={this.props.delete}
          />
        }
        bsStyle="default"
      >
        {comment.body}
      </Panel>
    );
  }
}

export default Comment;
