export type MainTabParamList = {
  HomeTab: undefined
  ExploreTab: undefined
  ProfileTab: undefined
}

export type HomeStackParamList = {
  Home: undefined
  MovieDetail: { movieId: number }
  FullCast: { movieId: number }
}

export type ExploreStackParamList = {
  Explore: undefined
}

export type ProfileStackParamList = {
  Profile: undefined
  UserReview: undefined
}