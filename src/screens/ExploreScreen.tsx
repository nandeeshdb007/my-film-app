import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import COLORS from '../constants/colors'

const ExploreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>Discover movies by category</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoryGrid}>
          {['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance'].map((category) => (
            <View key={category} style={styles.categoryCard}>
              <Text style={styles.categoryText}>{category}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Collections</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Collection items coming soon</Text>
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
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    paddingVertical: 20,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  placeholder: {
    height: 150,
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

export default ExploreScreen
