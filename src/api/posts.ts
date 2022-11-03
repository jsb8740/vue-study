import { posts } from ".";

export interface postsInfo {
  id?: string;
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
  return posts.get("/", { params });
};

export const getPostById = (id: string) => {
  return posts.get(id);
  // return posts.get(`/${id}`)
};

export const createPosts = (data: object) => {
  return posts.post("", data);
};

export const updatePosts = (id: string, data: object) => {
  return posts.put(id, data);
  // return posts.put(`/${id}`, data)
};

export const deletePosts = (id: string) => {
  // return posts.delete(`/${id}`);
  return posts.delete(id);
};
