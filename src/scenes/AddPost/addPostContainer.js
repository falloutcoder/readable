import { connect } from 'react-redux';
import { createPost } from './actions';
import AddPost from './addPost';

export default connect(null, { create: createPost })(AddPost);
