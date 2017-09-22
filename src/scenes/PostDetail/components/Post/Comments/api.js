import { v4 as uuidv4 } from 'uuid';

const api = process.env.REACT_APP_BACKEND_API_URL;
const headers = JSON.parse(process.env.REACT_APP_BACKEND_API_HEADER);

export const getAllCommentsForPost = id =>
  fetch(`${api}/posts/${id}/comments`, { headers }).then(res => res.json());

export const addCommentToPost = (id, body) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...body,
      id: uuidv4(),
      parentId: id,
      timestamp: Date.now(),
    }),
  }).then(res => res.json());
