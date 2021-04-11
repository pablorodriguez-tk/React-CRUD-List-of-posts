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

export const createPost = async (data) => {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts/`,
      data
    );
    return { hasError: false, createdPost: response.data };
  } catch (error) {
    return {
      hasError: true,
      error: error.message,
    };
  }
};

export const updatePost = async (data, post) => {
  try {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      data
    );
    console.log(response);
    return {
      hasError: false,
      updatedPost: response.data,
    };
  } catch (error) {
    return {
      hasError: true,
      error: error.message,
    };
  }
};
