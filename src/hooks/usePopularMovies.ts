/* build-ref:delta */

import { useState, useEffect, useCallback, useRef } from 'react';
import { getPopularMovies } from '../services/api';
import { Movie } from '../types/movie';

interface UsePopularMoviesState {
    movies: Movie[];
    loading: boolean;
    refreshing: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
    hasMore: boolean;
}

interface UsePopularMoviesReturn extends UsePopularMoviesState {
    loadMore: () => void;
    refresh: () => Promise<void>;
}

export const usePopularMovies = (): UsePopularMoviesReturn => {
    const [state, setState] = useState<UsePopularMoviesState>({
        movies: [],
        loading: true,
        refreshing: false,
        error: null,
        currentPage: 0,
        totalPages: 1,
        hasMore: true,
    });

    // Track if we're currently fetching to prevent duplicate requests
    const isFetchingRef = useRef(false);
    // Track movie IDs to prevent duplicates
    const movieIdsRef = useRef<Set<number>>(new Set());

    const fetchMovies = useCallback(async (page: number, isRefresh: boolean = false) => {
        if (isFetchingRef.current && !isRefresh) return;

        isFetchingRef.current = true;

        try {
            setState(prev => ({
                ...prev,
                loading: !isRefresh && page === 1,
                refreshing: isRefresh,
                error: null,
            }));

            const response = await getPopularMovies(page);

            // Filter out duplicates
            const newMovies = response.results.filter(movie => {
                if (movieIdsRef.current.has(movie.id)) {
                    return false;
                }
                movieIdsRef.current.add(movie.id);
                return true;
            });

            setState(prev => ({
                ...prev,
                movies: isRefresh ? response.results : [...prev.movies, ...newMovies],
                loading: false,
                refreshing: false,
                currentPage: response.page,
                totalPages: response.total_pages,
                hasMore: response.page < response.total_pages,
            }));

            // Update movie IDs set on refresh
            if (isRefresh) {
                movieIdsRef.current = new Set(response.results.map(m => m.id));
            }
        } catch (err) {
            setState(prev => ({
                ...prev,
                loading: false,
                refreshing: false,
                error: err instanceof Error ? err.message : 'Failed to fetch movies',
            }));
        } finally {
            isFetchingRef.current = false;
        }
    }, []);

    // Load first page on mount
    useEffect(() => {
        fetchMovies(1);
    }, [fetchMovies]);

    const loadMore = useCallback(() => {
        if (!state.loading && !isFetchingRef.current && state.hasMore) {
            fetchMovies(state.currentPage + 1);
        }
    }, [state.loading, state.currentPage, state.hasMore, fetchMovies]);

    const refresh = useCallback(async () => {
        movieIdsRef.current.clear();
        await fetchMovies(1, true);
    }, [fetchMovies]);

    return {
        ...state,
        loadMore,
        refresh,
    };
};

export default usePopularMovies;
