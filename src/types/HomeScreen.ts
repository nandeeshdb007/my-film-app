import { ImageSourcePropType } from "react-native";

export interface MovieCardProps {
  image?: ImageSourcePropType | undefined
  title: string;
  genre: string
}


export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  release_date: string;
  genre_ids: number[];
}

export interface MovieDetailsProps {
  route: { params: { movie: Movie } }
  navigation: any
}

export interface UsePopularMoviesState {
  movies: Movie[];
  trendingMovies: Movie[];
  loading: boolean;
  refreshing: boolean;
  error: string | null;
  currentPage: number;
  hasMore: boolean;
}

export interface UsePopularMoviesReturn extends UsePopularMoviesState {
  loadMore: () => void;
  refresh: () => void;
}