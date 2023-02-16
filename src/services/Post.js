import axios from "./customizeAxios";
const getAllPost = (page) => {
  return axios.get(`/posts?page=${page}`);
};
const addPost = (title, desc, tags) => {
  return axios.post("/posts", {
    title: title,
    description: desc,
    tags: [...tags],
  });
};
const deletePost = (postId) => {
  return axios.delete(`/posts/${postId}`);
};
const editPost = (editId, title, desc, tags) => {
  return axios.patch(`/posts/${editId}`, {
    title: title,
    description: desc,
    tags: tags,
  });
};
export { getAllPost, addPost, deletePost, editPost };
