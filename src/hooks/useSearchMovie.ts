import { useState, useEffect } from 'react';
import { searchMovies } from '../services/api';

export const useSearchMovies = () => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      clearSearch();
      return;
    }

    const timeout = setTimeout(() => {
      fetchMovies(query, 1);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const fetchMovies = async (q: string, p: number) => {
    try {
      setLoading(true);
      setError(null);

      const res = await searchMovies(q, p);

      setResults(p === 1 ? res.results : prev => [...prev, ...res.results]);
      setPage(res.page);
      setTotalPages(res.total_pages);
      setTotalResults(res.total_results);
      setHasSearched(true);
    } catch (e: any) {
      setError(e.message || 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading && page < totalPages) {
      fetchMovies(query, page + 1);
    }
  };

  const clearSearch = () => {
    setResults([]);
    setLoading(false);
    setError(null);
    setQuery('');
    setPage(1);
    setTotalPages(0);
    setTotalResults(0);
    setHasSearched(false);
  };

  return {
    results,
    loading,
    error,
    query,
    hasMore: page < totalPages,
    hasSearched,
    totalResults,
    setQuery,
    loadMore,
    clearSearch,
  };
};

export default useSearchMovies;
