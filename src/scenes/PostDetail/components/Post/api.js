const api = process.env.REACT_APP_BACKEND_API_URL;
const headers = JSON.parse(process.env.REACT_APP_BACKEND_API_HEADER);

export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers }).then(res => res.json());
