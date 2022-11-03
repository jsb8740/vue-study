import axios from "axios";

function create(baseURL: string, options?: object) {
  // Object.assign() 객체를 합치는거
  const instance = axios.create(Object.assign({ baseURL }, options));

  return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
