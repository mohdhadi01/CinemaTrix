import axios from "axios";

// const host = process.env.HOST;
const key = process.env.REACT_APP_API;

// const CommonLink = "https://api.themoviedb.org/3";
const CommonLink = "/api/tmdb?path=";

export const getCarousel = async (pageNumber) => {
  const options = {
    method: "GET",
    // url: `https://cinematrix-backend.vercel.app/get-carousel`,
    url: `${CommonLink}movie/now_playing?language=en-US&page=1&api_key=${key}`,
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
    url: `${CommonLink}trending/movie/day?language=en-US&api_key=${key}`,
    headers: {
      "Content-Type": "application/json",
    },
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
    url: `${CommonLink}movie/top_rated?language=en-US&page=1&api_key=${key}`,
    headers: {
      "Content-Type": "application/json",
    },
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
    url: `${CommonLink}trending/tv/day?language=en-US&api_key=${key}`,
    headers: {
      "Content-Type": "application/json",
    },
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
    url: `${CommonLink}tv/top_rated?language=en-US&page=1&api_key=${key}`,
    headers: {
      "Content-Type": "application/json",
    },
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
    url: `${CommonLink}discover/movie?include_adult=false&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc&api_key=${key}`,
    headers: {
      "Content-Type": "application/json",
    },
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
    url: `${CommonLink}discover/tv?include_adult=false&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc&api_key=${key}`,
    headers: {
      "Content-Type": "application/json",
    },
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
    url: `${CommonLink}search/movie?query=${SearchValue}&api_key=${key}`,
    headers: {
      "Content-Type": "application/json",
    },
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
    url: `${CommonLink}search/tv?query=${SearchValue}&api_key=${key}`,
    headers: {
      "Content-Type": "application/json",
    },
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
    url: `${CommonLink}movie/${id}?language=en-US&api_key=a122cee36b1bc254ee171ee36a29bb98&append_to_response=credits,videos,similar`,
    headers: {
      "Content-Type": "application/json",
    },
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
    url: `${CommonLink}tv/${id}?language=en-US&api_key=a122cee36b1bc254ee171ee36a29bb98&append_to_response=credits,videos,similar`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
