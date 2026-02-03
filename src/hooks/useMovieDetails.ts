import { useState, useEffect } from 'react';
import { getFullMovieData, getMovieReviews } from '../services/api';

export const useMovieDetails = (movieId: number) => {
  const [details, setDetails] = useState<any | null>(null);
  const [cast, setCast] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMoreReviews, setLoadingMoreReviews] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMoreReviews, setHasMoreReviews] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const { details, credits, reviews } = await getFullMovieData(movieId);

      setDetails(details);
      setCast(credits.cast.slice(0, 20));
      setReviews(reviews.results);
      setPage(reviews.page);
      setHasMoreReviews(reviews.page < reviews.total_pages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load movie');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadMoreReviews = async () => {
    if (!hasMoreReviews || loadingMoreReviews) return;

    try {
      setLoadingMoreReviews(true);
      const nextPage = page + 1;
      const res = await getMovieReviews(movieId, nextPage);

      setReviews(prev => [...prev, ...res.results]);
      setPage(res.page);
      setHasMoreReviews(res.page < res.total_pages);
    } finally {
      setLoadingMoreReviews(false);
    }
  };

  return {
    details,
    cast,
    reviews,
    loading,
    loadingMoreReviews,
    error,
    hasMoreReviews,
    loadMoreReviews,
    refetch: fetchData,
  };
};

export default useMovieDetails;
