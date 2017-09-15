const api = process.env.REACT_APP_BACKEND_API_URL;
const headers = JSON.parse(process.env.REACT_APP_BACKEND_API_HEADER);

export const getAllPostsForCategory = category =>
  fetch(`${api}/${category}/posts`, { headers }).then(res => res.json());

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers }).then(res => res.json());
