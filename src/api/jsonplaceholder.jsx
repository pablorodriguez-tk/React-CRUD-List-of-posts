import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return {
      posts: response.data,
      hasError: false,
    };
  } catch (error) {
    return {
      error: error.message,
      hasError: true,
    };
  }
};

export const deletePosts = (id) =>
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

export const getPostById = (id) =>
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      return {
        post: response.data,
        hasError: false,
      };
    })
    .catch((error) => {
      return { error: error.message, hasError: true };
    });
