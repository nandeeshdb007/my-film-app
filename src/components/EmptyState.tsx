
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface EmptyStateProps {
    icon?: string;
    title: string;
    message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    icon = 'film-outline',
    title,
    message,
}) => {
    return (
        <View style={styles.container}>
            <Ionicons name={icon} size={64} color="#666" />
            <Text style={styles.title}>{title}</Text>
            {message && <Text style={styles.message}>{message}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        minHeight: 300,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.text,
        marginTop: 16,
        textAlign: 'center',
    },
    message: {
        fontSize: 14,
        color: '#888',
        marginTop: 8,
        textAlign: 'center',
    },
});

export default EmptyState;
