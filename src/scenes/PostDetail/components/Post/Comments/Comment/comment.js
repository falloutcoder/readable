import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonGroup,
  Button,
  Col,
  Form,
  FormGroup,
  FormControl,
  Modal,
  Panel,
} from 'react-bootstrap';
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-o-up';
import ThumbsUpDarkIcon from 'react-icons/lib/fa/thumbs-up';
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-o-down';
import ThumbsDownDarkIcon from 'react-icons/lib/fa/thumbs-down';
import UserIcon from 'react-icons/lib/fa/user';
import CalendarIcon from 'react-icons/lib/fa/calendar';
import TrashIcon from 'react-icons/lib/fa/trash-o';
import EditIcon from 'react-icons/lib/fa/edit';
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
    enableEditMode: PropTypes.func,
  };

  render() {
    const {
      author,
      date,
      votes,
      upVote,
      downVote,
      enableEditMode,
    } = this.props;
    return (
      <div>
        <span>
          <UserIcon /> {author}
          {' | '}
        </span>
        <span>
          <CalendarIcon /> {date}
          {' | '}
        </span>
        <span>
          {votes < 0 ? <ThumbsDownIcon /> : <ThumbsUpIcon />} {votes}
        </span>
        <ButtonGroup className="pull-right">
          <Button onClick={upVote}>
            <ThumbsUpDarkIcon />
          </Button>
          <Button onClick={downVote}>
            <ThumbsDownDarkIcon />
          </Button>
          <Button onClick={this.props.delete}>
            <TrashIcon />
          </Button>
          <Button onClick={enableEditMode}>
            <EditIcon />
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
    update: PropTypes.func,
    openEditModal: PropTypes.func,
    closeEditModal: PropTypes.func,
    isEditMode: PropTypes.bool,
  };

  submit = f => {
    this.props.update(this.props.comment.id, {
      author: f.target.author.value,
      body: f.target.comment.value,
    });
    f.preventDefault();
    this.props.closeEditModal();
  };

  render() {
    const {
      comment,
      isEditMode,
      closeEditModal,
      upVote,
      downVote,
      openEditModal,
    } = this.props;
    return (
      <Panel
        className="readable-post-comment"
        header={
          <CommentHeader
            author={comment.author}
            date={formatTimeStamp(comment.timestamp)}
            votes={comment.voteScore}
            upVote={upVote}
            downVote={downVote}
            delete={this.props.delete}
            enableEditMode={openEditModal}
          />
        }
        bsStyle="default"
      >
        {comment.body}

        <Modal
          show={isEditMode}
          onHide={closeEditModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Add Comment To Post
            </Modal.Title>
          </Modal.Header>
          <Form horizontal onSubmit={this.submit}>
            <Modal.Body>
              <FormGroup controlId="formHorizontalEmail">
                <Col sm={2}>Author</Col>
                <Col sm={8}>
                  <FormControl
                    defaultValue={comment.author}
                    name="author"
                    type="text"
                    placeholder="Author"
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={2}>Comment</Col>
                <Col sm={8}>
                  <FormControl
                    defaultValue={comment.body}
                    name="comment"
                    type="text"
                    placeholder="Comment"
                    required
                  />
                </Col>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="danger" onClick={closeEditModal}>
                Close
              </Button>
              <Button bsStyle="success" type="submit">
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Panel>
    );
  }
}

export default Comment;
