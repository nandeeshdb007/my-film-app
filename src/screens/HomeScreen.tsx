import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import COLORS from '../constants/colors'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Movie App</Text>
        <Text style={styles.subtitle}>Discover amazing movies</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Movies</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Coming Soon</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Releases</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Coming Soon</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 15,
  },
  placeholder: {
    height: 200,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
    fontSize: 14,
  },
})

export default HomeScreen
