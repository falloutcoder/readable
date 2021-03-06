const api = process.env.REACT_APP_BACKEND_API_URL;
const headers = JSON.parse(process.env.REACT_APP_BACKEND_API_HEADER);

export const castVoteToPost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option }),
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
    },
  }).then(res => res.json());

export const editPost = (id, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  }).then(res => res.json());
