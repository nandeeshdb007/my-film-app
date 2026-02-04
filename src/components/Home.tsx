import React from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import COLORS from '../constants/colors';
import OverviewSection from './OverviewSection';
import SectionHeader from './SectionHeader';
import MovieCard from './MovieCard';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { HomeStackParamList } from '../types/navigation';
import LoadingIndicator from './LoadingIndicator';
import EmptyState from './EmptyState';

type NavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const Home = () => {
  const navigation = useNavigation<NavigationProp>();
  const {
    movies,
    trendingMovies,
    loading,
    refreshing,
    error,
    hasMore,
    loadMore,
    refresh,
  } = usePopularMovies();

  if (loading && movies.length === 0) {
    return (
      <View style={styles.container}>
        <OverviewSection movie={trendingMovies[0]} />
        <LoadingIndicator fullScreen text="Loading movies" />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={movies}
      numColumns={3}
      columnWrapperStyle={styles.row}
      keyExtractor={(item: any) => item.id}
      onEndReached={hasMore ? loadMore : undefined}
      onEndReachedThreshold={0.5}
      removeClippedSubviews={false}
      maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refresh}
          tintColor={COLORS.secondary}
          colors={[COLORS.secondary]}
        />
      }
      ListHeaderComponent={
        <>
          <OverviewSection
            movie={
              trendingMovies[0]
            }
          />
          <View style={styles.sectionContainer}>
            <SectionHeader title="Popular Movies" />
          </View>
        </>
      }
      ListFooterComponent={
        hasMore ? (
          <LoadingIndicator size="small" text="Loading more" />
        ) : (
          <View style={{ height: 20 }} />
        )
      }
      ListEmptyComponent={
        !loading ? (
          <EmptyState
            icon="film-outline"
            title="No Movies Found"
            message={error || 'Unable to load movies. Please try again.'}
          />
        ) : null
      }
      renderItem={({ item }: any) => (
        <MovieCard
          id={item.id}
          title={item.title}
          posterPath={item.poster_path}
          voteAverage={item.vote_average}
          releaseDate={item.release_date}
          onPress={() =>
            navigation.navigate('MovieDetail', { movieId: item.id })
          }
        />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  sectionContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
  },
});

export default Home;
