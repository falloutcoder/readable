import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonToolbar,
  Button,
  Col,
  Form,
  FormGroup,
  FormControl,
  Modal,
} from 'react-bootstrap';
import PlusIcon from 'react-icons/lib/fa/plus-square-o';

export default class AddComment extends PureComponent {
  static propTypes = {
    isVisible: PropTypes.bool,
    open: PropTypes.func,
    close: PropTypes.func,
    add: PropTypes.func,
  };

  onSubmit = f => {
    this.props.add({
      author: f.target.author.value,
      body: f.target.comment.value,
    });
    f.preventDefault();
    this.props.close();
  };

  render() {
    const { open, close, isVisible } = this.props;
    return (
      <ButtonToolbar className="well">
        <Button bsStyle="success" onClick={open}>
          Add Comment <PlusIcon />
        </Button>

        <Modal show={isVisible} onHide={close} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Add Comment To Post
            </Modal.Title>
          </Modal.Header>
          <Form horizontal onSubmit={this.onSubmit}>
            <Modal.Body>
              <FormGroup controlId="formHorizontalEmail">
                <Col sm={2}>Author</Col>
                <Col sm={8}>
                  <FormControl
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
                    name="comment"
                    type="text"
                    placeholder="Comment"
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
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </ButtonToolbar>
    );
  }
}
