import { v4 as uuidv4 } from 'uuid';

const api = process.env.REACT_APP_BACKEND_API_URL;
const headers = JSON.parse(process.env.REACT_APP_BACKEND_API_HEADER);

export const addPost = body =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body, id: uuidv4(), timestamp: Date.now() }),
  }).then(res => res.json());
