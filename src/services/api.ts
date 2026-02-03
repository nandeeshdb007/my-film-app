import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5a2b19a396a637a2fb9806e0e8748b42",
  },
});

export const getPopularMovies = async (
  page: number = 1,
  language: string = 'en-US',
): Promise<any> => {
  const { data } = await api.get('/movie/popular', {
    params: { page, language },
  });
  return data;
};

export const searchMovies = async (
  query: string,
  page: number = 1,
  language: string = 'en-US'
): Promise<any> => {
  const { data } = await api.get('/search/movie', {
    params: { query, page, language },
  });
  return data;
};

export const getMovieDetails = async (
  movieId: number,
  language: string = 'en-US'
): Promise<any> => {
  const { data } = await api.get(`/movie/${movieId}`, {
    params: { language },
  });
  return data;
};

export const getMovieCredits = async (
  movieId: number,
  language: string = 'en-US'
): Promise<any> => {
  const { data } = await api.get(`/movie/${movieId}/credits`, {
    params: { language },
  });
  return data;
};

export const getMovieReviews = async (
  movieId: number,
  page: number = 1,
  language: string = 'en-US'
): Promise<any> => {
  const { data } = await api.get(`/movie/${movieId}/reviews`, {
    params: { page, language },
  });
  return data;
};

export const getFullMovieData = async (
  movieId: number,
  reviewsPage: number = 1
) => {
  const [details, credits, reviews] = await Promise.all([
    getMovieDetails(movieId),
    getMovieCredits(movieId),
    getMovieReviews(movieId, reviewsPage),
  ]);

  return { details, credits, reviews };
};
