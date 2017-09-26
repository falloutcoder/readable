import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, FormGroup, FormControl } from 'react-bootstrap';
import Header from '../../components/Header/header';

class AddPost extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    create: PropTypes.func,
  };

  render() {
    return (
      <div>
        <Header />
        <PostForm
          history={this.props.history}
          create={this.props.create}
        />
      </div>
    );
  }
}

class PostForm extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    create: PropTypes.func,
  };

  submit = f => {
    f.preventDefault();
    this.props.create({
      author: f.target.author.value,
      title: f.target.title.value,
      voteScore: parseInt(f.target.voteScore.value, 0),
      body: f.target.body.value,
      category: f.target.category.value,
    });
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container">
        <h2>Add Post</h2>
        <hr />
        <Form horizontal onSubmit={this.submit}>
          <FormGroup>
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
          <FormGroup>
            <Col sm={2}>Title</Col>
            <Col sm={8}>
              <FormControl
                name="title"
                type="text"
                placeholder="Title"
                required
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Category</Col>
            <Col sm={8}>
              <FormControl componentClass="select" name="category" required>
                <option value="">------</option>
                <option value="react">React</option>
                <option value="udacity">Udacity</option>
                <option value="redux">Redux</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>Votes Score</Col>
            <Col sm={8}>
              <FormControl
                name="voteScore"
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
                name="body"
                componentClass="textarea"
                placeholder="body"
                required
              />
            </Col>
          </FormGroup>
          <Button bsStyle="success" type="submit">
            Create
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddPost;
