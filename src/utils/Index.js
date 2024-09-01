import axios from "axios";

// const host = process.env.HOST;
const key = process.env.REACT_APP_API;

export const getCarousel = async (pageNumber) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}&api_key=${key}`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTrendingMovies = async (pageNumber) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${key}`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTopRatedMovies = async (pageNumber) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${key}`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTrendingSeries = async (pageNumber) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${key}`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTopRatedSeries = async (pageNumber) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${key}`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllMovies = async (pageNumber) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc&api_key=${key}`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getAllSeries = async (pageNumber) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc&api_key=${key}`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchMovies = async (SearchValue) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/search/movie?query=${SearchValue}&api_key=${key}`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const searchSeries = async (SearchValue) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/search/tv?query=${SearchValue}&api_key=${key}`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetail = async (id) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=a122cee36b1bc254ee171ee36a29bb98&append_to_response=credits,videos,similar`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getSeriesDetail = async (id) => {
  const options = {
    method: "GET",
    url: `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=a122cee36b1bc254ee171ee36a29bb98&append_to_response=credits,videos,similar`,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
