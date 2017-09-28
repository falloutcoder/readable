import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormControl,
  Modal,
} from 'react-bootstrap';

export default class PostEditModal extends PureComponent {
  static propTypes = {
    post: PropTypes.object,
    close: PropTypes.func,
    update: PropTypes.func,
  };

  submit = f => {
    this.props.update({
      author: f.target.author.value,
      title: f.target.title.value,
      voteScore: parseInt(f.target.votescore.value, 0),
      body: f.target.body.value,
    });
    f.preventDefault();
    this.props.close();
  };

  render() {
    const { close, post } = this.props;
    return (
      <Modal show={true} onHide={close} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Edit Post</Modal.Title>
        </Modal.Header>
        <Form horizontal onSubmit={this.submit}>
          <Modal.Body>
            <FormGroup>
              <Col sm={2}>Author</Col>
              <Col sm={8}>
                <FormControl
                  defaultValue={post.author}
                  name="author"
                  type="text"
                  placeholder="Author"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={2}>Title</Col>
              <Col sm={8}>
                <FormControl
                  defaultValue={post.title}
                  name="title"
                  type="text"
                  placeholder="Title"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={2}>Votes Score</Col>
              <Col sm={8}>
                <FormControl
                  defaultValue={post.voteScore}
                  name="votescore"
                  type="text"
                  placeholder="Vote Score"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={2}>Body</Col>
              <Col sm={8}>
                <FormControl
                  defaultValue={post.body}
                  name="body"
                  componentClass="textarea"
                  placeholder="body"
                  required
                />
              </Col>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={close}>
              Close
            </Button>
            <Button bsStyle="success" type="submit">
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
