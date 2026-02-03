import { useState, useEffect, useCallback } from 'react';
import { getPopularMovies } from '../services/api';
import { Movie, UsePopularMoviesReturn } from '../types/HomeScreen';

export const usePopularMovies = (): UsePopularMoviesReturn => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = async (pageNumber: number, isRefresh = false) => {
    try {
      isRefresh ? setRefreshing(true) : setLoading(true);

      const res = await getPopularMovies(pageNumber);
      console.log(res)

      setMovies(prev =>
        isRefresh ? res.results : [...prev, ...res.results]
      );
      setHasMore(res.page < res.total_pages);
      setPage(res.page);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch movies');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchMovies(page + 1);
    }
  }, [page, hasMore, loading]);

  const refresh = useCallback(() => {
    fetchMovies(1, true);
  }, []);

  return {
    movies,
    loading,
    refreshing,
    error,
    loadMore,
    refresh,
    hasMore,
    currentPage: page,
  };
};

export default usePopularMovies;
