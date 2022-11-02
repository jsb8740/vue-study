import axios from "axios";

export interface postsInfo {
  id?: number;
  title?: string;
  content?: string;
  createdAt?: string | Date | number;
}

export const getPosts = (params: {
  _sort: string;
  _order: string;
  _limit: number;
  _page: number;
  title_like: string;
}) => {
  return axios.get("http://localhost:5000/posts", { params });
};

export const getPostById = (id: number) => {
  return axios.get(`http://localhost:5000/posts/${id}`);
};

export const createPosts = (data: object) => {
  return axios.post("http://localhost:5000/posts", data);
};

export const updatePosts = (id: number, data: object) => {
  return axios.put(`http://localhost:5000/posts/${id}`, data);
};

export const deletePosts = (id: number) => {
  return axios.delete(`http://localhost:5000/posts/${id}`);
};
