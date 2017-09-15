import { castVoteToPost } from './api';

export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export const upVotePost = id => {
  return dispatch => {
    return castVoteToPost(id, 'upVote').then(post =>
      dispatch({ type: UP_VOTE_POST, payload: post }),
    );
  };
};

export const downVotePost = id => {
  return dispatch => {
    return castVoteToPost(id, 'downVote').then(post =>
      dispatch({ type: DOWN_VOTE_POST, payload: post }),
    );
  };
};
