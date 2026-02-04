

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getImageUrl, IMAGE_SIZES } from '../constants/api';
import COLORS from '../constants/colors';
import { hs, ms } from '../utils/screen-dimensions';

interface CastCardProps {
    cast: any;
}

const CastCard: React.FC<CastCardProps> = ({ cast }) => {
    const [imageError, setImageError] = useState(false);
    const imageUrl = getImageUrl(cast.profile_path, IMAGE_SIZES.profile.medium);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {imageUrl && !imageError ? (
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <View style={styles.placeholder}>
                        <Text style={styles.placeholderText}>
                            {cast.name.charAt(0).toUpperCase()}
                        </Text>
                    </View>
                )}
            </View>
            <Text style={styles.name} numberOfLines={1}>
                {cast.name}
            </Text>
            <Text style={styles.character} numberOfLines={2}>
                {cast.character}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: hs(90),
        marginRight: 12,
        alignItems: 'center',
    },
    imageContainer: {
        width: hs(70),
        height: hs(70),
        borderRadius: hs(35),
        overflow: 'hidden',
        backgroundColor: COLORS.skeletonBackground,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    placeholder: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.skeletonBackground,
    },
    placeholderText: {
        fontSize: ms(24),
        fontWeight: 'bold',
        color: COLORS.text,
    },
    name: {
        marginTop: 8,
        fontSize: ms(12),
        fontWeight: '600',
        color: COLORS.text,
        textAlign: 'center',
    },
    character: {
        fontSize: ms(10),
        color: '#888',
        textAlign: 'center',
        marginTop: 2,
    },
});

export default CastCard;
