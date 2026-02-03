import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { hs, ms, vs } from '../../utils/screen-dimensions';
import COLORS from '../../constants/colors';
import { getImageUrl, IMAGE_SIZES } from '../../config';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string | null;
  voteAverage?: number;
  releaseDate?: string;
  onPress?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterPath,
  voteAverage,
  releaseDate,
  onPress,
}) => {
  const [hasError, setHasError] = useState(false);

  const imageUrl = getImageUrl(posterPath, IMAGE_SIZES.poster.medium);
  const year = releaseDate ? new Date(releaseDate).getFullYear() : null;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        {imageUrl && !hasError ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>🎬</Text>
          </View>
        )}

        {voteAverage ? (
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>{voteAverage.toFixed(1)}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        {year && <Text style={styles.year}>{year}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: hs(110),
    marginHorizontal: 8,
    marginBottom: 14,
  },
  imageContainer: {
    height: vs(150),
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: COLORS.skeletonBackground,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.skeletonBackground,
  },
  placeholderText: {
    fontSize: 40,
  },
  ratingBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  ratingText: {
    color: '#FFD700',
    fontSize: ms(11),
    fontWeight: '600',
  },
  info: {
    alignItems: 'center',
    marginTop: 6,
  },
  title: {
    color: COLORS.text,
    fontSize: ms(14),
    fontWeight: '600',
    textAlign: 'center',
  },
  year: {
    color: 'gray',
    fontSize: ms(10),
  },
});

export default MovieCard;
