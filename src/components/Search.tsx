import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useSearchMovies from '../hooks/useSearchMovie';
import LoadingIndicator from './LoadingIndicator';
import EmptyState from './EmptyState';
import COLORS from '../constants/colors';
import MovieCard from './MovieCard';

const Search = () => {
    const navigation = useNavigation<any>();

    const {
        results,
        loading,
        query,
        hasMore,
        hasSearched,
        totalResults,
        setQuery,
        loadMore,
        clearSearch,
    } = useSearchMovies();

    const goToMovie = (id: number) => {
        navigation.navigate('MovieDetail', { movieId: id });
    };

    const renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.title}>Search</Text>
            <Text style={styles.subtitle}>Find your favorite movies</Text>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#888" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search movies..."
                    placeholderTextColor="#666"
                    value={query}
                    onChangeText={setQuery}
                />
                {query.length > 0 && (
                    <TouchableOpacity onPress={clearSearch}>
                        <Ionicons name="close-circle" size={20} color="#888" />
                    </TouchableOpacity>
                )}
            </View>

            {hasSearched && totalResults > 0 && (
                <Text style={styles.resultCount}>Found {totalResults} movies</Text>
            )}
        </View>
    );

    const renderEmpty = () => {
        if (loading) return <LoadingIndicator text="Searching..." />;

        if (!hasSearched)
            return (
                <EmptyState
                    icon="search"
                    title="Search for Movies"
                    message="Enter a movie name"
                />
            );

        return (
            <EmptyState
                icon="film-outline"
                title="No Results"
                message={`No movies found for "${query}"`}
            />
        );
    };

    return (
        <FlatList
            style={styles.container}
            data={results}
            numColumns={3}
            keyExtractor={item => item.id}
            removeClippedSubviews={false}
            maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
            renderItem={({ item }) => (
                <MovieCard
                    id={item.id}
                    title={item.title}
                    posterPath={item.poster_path}
                    voteAverage={item.vote_average}
                    releaseDate={item.release_date}
                    onPress={() => goToMovie(item.id)}
                />
            )}
            columnWrapperStyle={results.length ? styles.row : undefined}
            ListHeaderComponent={renderHeader}
            ListEmptyComponent={renderEmpty}
            ListFooterComponent={
                hasMore ? <LoadingIndicator size="small" text="Loading more..." /> : <View style={{ height: 20 }} />
            }
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
        />
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    contentContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary + '20',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    subtitle: {
        fontSize: 16,
        color: '#999',
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 12,
        paddingHorizontal: 12,
    },
    searchInput: {
        flex: 1,
        height: 48,
        fontSize: 16,
        color: COLORS.text,
    },
    resultCount: {
        marginTop: 12,
        color: '#888',
    },
    row: {
        paddingHorizontal: 8,
    },
});
