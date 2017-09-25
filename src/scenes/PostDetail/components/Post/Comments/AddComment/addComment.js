import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, Button, Modal } from 'react-bootstrap';
import PlusIcon from 'react-icons/lib/fa/plus-square-o';

export default class AddComment extends PureComponent {
  static propTypes = {
    isVisible: PropTypes.bool,
    open: PropTypes.func,
    close: PropTypes.func,
  };

  render() {
    const { open, close, isVisible } = this.props;
    return (
      <ButtonToolbar className="well">
        <Button bsStyle="success small" onClick={open}>
          Add Comment <PlusIcon />
        </Button>

        <Modal show={isVisible} onHide={close} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Add Comment To Post
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}
