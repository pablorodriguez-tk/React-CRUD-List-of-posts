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

export const getPostById = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return {
      post: response.data,
      hasError: false,
    };
  } catch (error) {
    return { error: error.message, hasError: true };
  }
};

export const deletePosts = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return {
      hasError: false,
    };
  } catch (error) {
    return { error: error.message, hasError: true };
  }
};
