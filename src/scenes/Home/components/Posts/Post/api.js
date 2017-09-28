const api = process.env.REACT_APP_BACKEND_API_URL;
const headers = JSON.parse(process.env.REACT_APP_BACKEND_API_HEADER);

export const getCommentsCountForPost = id =>
  fetch(`${api}/posts/${id}/comments`, { headers }).then(res => res.json());
