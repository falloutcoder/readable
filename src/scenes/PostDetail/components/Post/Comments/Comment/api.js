const api = process.env.REACT_APP_BACKEND_API_URL;
const headers = JSON.parse(process.env.REACT_APP_BACKEND_API_HEADER);

export const castVoteToComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option }),
  }).then(res => res.json());

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
    },
  }).then(res => res.json());
