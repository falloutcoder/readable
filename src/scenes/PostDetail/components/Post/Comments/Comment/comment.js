import React, { PureComponent } from 'react';
import { Panel } from 'react-bootstrap';
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-o-up';
import UserIcon from 'react-icons/lib/fa/user';
import CalendarIcon from 'react-icons/lib/fa/calendar';
import { formatTimeStamp } from '../../../../../../utils';

class CommentHeader extends PureComponent {
  render() {
    return (
      <div>
        <span>
          <UserIcon /> {this.props.user}{' '}
        </span>
        <span>
          <CalendarIcon /> {this.props.date}{' '}
        </span>
        <span>
          <ThumbsUpIcon />
        </span>
      </div>
    );
  }
}

class Comment extends PureComponent {
  render() {
    const { comment } = this.props;
    return (
      <Panel
        header={
          <CommentHeader
            user={comment.author}
            date={formatTimeStamp(comment.timestamp)}
            votes={comment.voteScore}
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
