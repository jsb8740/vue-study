import { posts } from ".";

export interface postsInfo {
  id?: string | number;
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

export const getPostById = (id: string | number) => {
  // return posts.get(id);
  return posts.get(`/${id}`);
};

export const createPosts = (data: object) => {
  return posts.post("", data);
};

// export const updatePosts = (id: string | number, data: object) => {
//   // return posts.put(id, data);
//   return posts.put(`/${id}`, data);
// };
export const updatePosts = (id: string | number, data: object) => {
  // return posts.put(id, data);
  return posts.patch(`/${id}`, data);
};

export const deletePosts = (id: string | number) => {
  return posts.delete(`/${id}`);
  // return posts.delete(id);
};
