
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import COLORS from '../../constants/colors';

interface LoadingIndicatorProps {
    size?: 'small' | 'large';
    color?: string;
    text?: string;
    fullScreen?: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
    size = 'large',
    color = COLORS.secondary,
    text,
    fullScreen = false,
}) => {
    const content = (
        <>
            <ActivityIndicator size={size} color={color} />
            {text && <Text style={styles.text}>{text}</Text>}
        </>
    );

    if (fullScreen) {
        return <View style={styles.fullScreen}>{content}</View>;
    }

    return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullScreen: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 10,
        color: COLORS.text,
        fontSize: 14,
    },
});

export default LoadingIndicator;
