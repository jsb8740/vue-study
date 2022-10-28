export interface postsInfo {
  id?: number;
  title?: string;
  content?: string;
  createdAt?: string | Date | number;
}

const posts = [
  { id: 1, title: "제목1", content: "내용1", createdAt: "2022-01-21" },
  { id: 2, title: "제목2", content: "내용2", createdAt: "2022-02-22" },
  { id: 3, title: "제목3", content: "내용3", createdAt: "2022-03-23" },
  { id: 4, title: "제목4", content: "내용4", createdAt: "2022-04-24" },
  { id: 5, title: "제목5", content: "내용5", createdAt: "2022-05-25" },
  { id: 6, title: "제목6", content: "내용6", createdAt: "2022-06-26" },
  { id: 7, title: "제목7", content: "내용7", createdAt: "2022-07-27" },
];

export const getPosts = () => {
  return posts;
};

export const getPostById = (id: number) => {
  return posts.find((item) => item.id === id);
};
