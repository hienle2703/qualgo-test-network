import { get } from "./api";

const getRandomChar = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
};

export const getRandomMovies = async () => {
  const { data } = await get(`?q=${getRandomChar()}`);

  const formattedData = data.description.map((item) => {
    return Object.keys(item).reduce((acc, key) => {
      const newKey = key.replace("#", "").toLowerCase();
      acc[newKey] = item[key];
      return acc;
    }, {});
  });

  return formattedData;
};

export const searchMovie = async (keyword) => {
  const { data } = await get(`?q=${keyword}`);

  const formattedData = data.description.map((item) => {
    return Object.keys(item).reduce((acc, key) => {
      const newKey = key.replace("#", "").toLowerCase();
      acc[newKey] = item[key];
      return acc;
    }, {});
  });

  return formattedData;
};

export const getMovieDetailById = async (imdbId) => {
  const { data } = await get(`?tt=${imdbId}`);

  return data;
};
