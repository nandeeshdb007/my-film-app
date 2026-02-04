import React from 'react'
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import COLORS from '../constants/colors'
import { MovieDetailsProps } from '../types/HomeScreen'


const MovieDetails = ({ route, navigation }: MovieDetailsProps) => {
    const { movie } = route.params

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <Image source={{ uri: movie.image }} style={styles.image} resizeMode="cover" />

            <View style={styles.content}>
                <Text style={styles.title}>{movie.title}</Text>
                {movie.genre ? <Text style={styles.genre}>{movie.genre}</Text> : null}
                {movie.rating ? <Text style={styles.meta}>Rating: {movie.rating}</Text> : null}
                {movie.year ? <Text style={styles.meta}>Year: {movie.year}</Text> : null}

                <Text style={styles.description}>
                    {movie.description ?? 'No description available.'}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.primary },
    back: { padding: 12 },
    backText: { color: '#fff' },
    image: { width: '100%', height: 300 },
    content: { padding: 16 },
    title: { color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 6 },
    genre: { color: '#ddd', marginBottom: 6 },
    meta: { color: '#aaa', marginBottom: 4 },
    description: { color: '#eee', marginTop: 12, lineHeight: 20 },
})

export default MovieDetails
