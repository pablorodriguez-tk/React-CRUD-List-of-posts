import axios from "axios";

export const getPosts = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return {
        posts: response.data,
        hasError: false,
      };
    })
    .catch((error) => {
      return {
        error: error.message,
        hasError: true,
      };
    });

export const deletePosts = (id) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(() => {
      return {
        hasError: false,
      };
    })
    .catch((error) => {
      return { error: error.message, hasError: true };
    });
};
