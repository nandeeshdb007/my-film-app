import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import COLORS from '../constants/colors';
import { getImageUrl, IMAGE_SIZES } from '../constants/api';
import { useMovieDetails } from '../hooks/useMovieDetails';
import LoadingIndicator from '../components/LoadingIndicator';
import EmptyState from '../components/EmptyState';
import CastCard from '../components/CastCard';
import ReviewCard from '../components/ReviewCard';

const { width } = Dimensions.get('window');
const BACKDROP_HEIGHT = 280;

const MovieDetailsScreen = () => {
  const { params } = useRoute<any>();
  const navigation = useNavigation<any>();
  const { movieId } = params;

  const {
    details,
    cast,
    reviews,
    loading,
    loadingMoreReviews,
    error,
    hasMoreReviews,
    loadMoreReviews,
  } = useMovieDetails(movieId);

  if (loading) return <LoadingIndicator fullScreen />;

  if (!details || error) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <EmptyState title="Error loading movie" message={error || 'Failed'} />
      </View>
    );
  }

  const backdropUrl = getImageUrl(
    details.backdrop_path,
    IMAGE_SIZES.backdrop.large,
  );
  const posterUrl = getImageUrl(details.poster_path, IMAGE_SIZES.poster.large);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backdropContainer}>
        <Image source={{ uri: backdropUrl }} style={styles.backdrop} />
        <LinearGradient
          colors={['transparent', COLORS.primary]}
          style={styles.gradient}
        />
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.row}>
          <Image source={{ uri: posterUrl }} style={styles.poster} />
          <View style={{ flex: 1, marginLeft: 16 }}>
            <Text style={styles.title}>{details.title}</Text>
            <Text style={styles.sub}>
              ⭐ {details.vote_average.toFixed(1)} ({details.vote_count})
            </Text>
            <Text style={styles.sub}>
              {details.release_date} • {details.runtime} min
            </Text>
          </View>
        </View>

        <Text style={styles.section}>Overview</Text>
        <Text style={styles.text}>{details.overview}</Text>

        <Text style={styles.section}>Cast</Text>
        <FlatList
          data={cast.slice(0, 10)}
          renderItem={({ item }) => <CastCard cast={item} />}
          horizontal
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.section}>Reviews</Text>
        {reviews.map(r => (
          <ReviewCard key={r.id} review={r} />
        ))}

        {hasMoreReviews && (
          <TouchableOpacity onPress={loadMoreReviews} style={styles.loadMore}>
            {loadingMoreReviews ? (
              <LoadingIndicator size="small" />
            ) : (
              <Text style={styles.loadText}>Load more</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  backdropContainer: {
    height: BACKDROP_HEIGHT,
  },
  backdrop: {
    width,
    height: BACKDROP_HEIGHT,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: 120,
    height: 120,
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  info: {
    padding: 16,
    marginTop: -40,
  },
  row: {
    flexDirection: 'row',
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  sub: {
    color: '#aaa',
    marginTop: 4,
  },
  section: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
  },
  text: {
    color: '#ccc',
    marginTop: 6,
  },
  loadMore: {
    alignItems: 'center',
    marginVertical: 12,
  },
  loadText: {
    color: COLORS.secondary,
    fontWeight: '600',
  },
});
