import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Alert } from 'react-bootstrap';
import Sorter from './Sorter/sorterContainer';
import Post from './Post/post';
import './posts.css';

class Posts extends PureComponent {
  static propTypes = {
    posts: PropTypes.array,
    selectedCategory: PropTypes.string,
    loadPosts: PropTypes.func,
    loadPostsForCategory: PropTypes.func,
  };

  componentDidMount() {
    this.props.loadPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCategory !== this.props.selectedCategory) {
      if (nextProps.selectedCategory) {
        this.props.loadPostsForCategory(nextProps.selectedCategory);
      } else {
        this.props.loadPosts();
      }
    }
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <ol className="readable-posts">
              {this.props.posts.map(post => (
                <li key={post.id}>
                  <Post post={post} />
                </li>
              ))}
            </ol>
            {!this.props.posts.length && (
              <Alert bsStyle="danger">
                <strong>Ahhh Snap!!!</strong> No posts found for this
                category...
              </Alert>
            )}
          </Col>
          <Col xs={6} md={4}>
            <Sorter />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Posts;
