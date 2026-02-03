import { ImageSourcePropType } from "react-native";

export interface MovieCardProps{
    image?: ImageSourcePropType | undefined
    title:string;
    genre:string
}


export interface Movie  {
  id?: string
  title: string
  image: string
  genre?: string
  description?: string
  year?: number
  rating?: number | string
}

export interface MovieDetailsProps {
  route: { params: { movie: Movie } }
  navigation: any
}

export interface UsePopularMoviesState {
    movies: Movie[];
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