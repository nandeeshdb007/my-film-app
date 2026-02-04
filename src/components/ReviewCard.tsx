
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { getImageUrl, IMAGE_SIZES } from '../constants/api';
import COLORS from '../constants/colors';
import { ms } from '../utils/screen-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ReviewCardProps {
    review: any;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    const [expanded, setExpanded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const avatarUrl = review.author_details.avatar_path
        ? review.author_details.avatar_path.startsWith('/https')
            ? review.author_details.avatar_path.substring(1)
            : getImageUrl(review.author_details.avatar_path, IMAGE_SIZES.profile.small)
        : null;

    const rating = review.author_details.rating;
    const isLongContent = review.content.length > 200;
    const displayContent = expanded || !isLongContent
        ? review.content
        : review.content.substring(0, 200) + '...';

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    {avatarUrl && !imageError ? (
                        <Image
                            source={{ uri: avatarUrl }}
                            style={styles.avatar}
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <View style={styles.avatarPlaceholder}>
                            <Text style={styles.avatarText}>
                                {review.author.charAt(0).toUpperCase()}
                            </Text>
                        </View>
                    )}
                </View>
                <View style={styles.headerInfo}>
                    <Text style={styles.author}>{review.author}</Text>
                    <Text style={styles.date}>{formatDate(review.created_at)}</Text>
                </View>
                {rating && (
                    <View style={styles.ratingBadge}>
                        <Ionicons name="star" size={12} color="#FFD700" />
                        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
                    </View>
                )}
            </View>

            <Text style={styles.content}>{displayContent}</Text>

            {isLongContent && (
                <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                    <Text style={styles.readMore}>
                        {expanded ? 'Show less' : 'Read more'}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatarContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 12,
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    avatarPlaceholder: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: ms(16),
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    headerInfo: {
        flex: 1,
    },
    author: {
        fontSize: ms(14),
        fontWeight: '600',
        color: COLORS.text,
    },
    date: {
        fontSize: ms(11),
        color: '#888',
        marginTop: 2,
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    ratingText: {
        fontSize: ms(12),
        fontWeight: '600',
        color: '#FFD700',
        marginLeft: 4,
    },
    content: {
        fontSize: ms(13),
        color: '#ccc',
        lineHeight: 20,
    },
    readMore: {
        fontSize: ms(13),
        color: COLORS.secondary,
        fontWeight: '600',
        marginTop: 8,
    },
});

export default ReviewCard;
