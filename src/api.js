import axios from "axios";

const API_MOVIE = "https://imdb.iamidiotareyoutoo.com/search";

const apiClient = axios.create({
  baseURL: API_MOVIE,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  console.error("API error: ", error);
  throw error.response ? error.response.data : error;
};
