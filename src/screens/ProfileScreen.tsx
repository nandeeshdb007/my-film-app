import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import COLORS from '../constants/colors'

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImage}>
          <Text style={styles.profileInitial}>U</Text>
        </View>
        <Text style={styles.profileName}>User Profile</Text>
        <Text style={styles.profileEmail}>user@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Watchlist</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No movies added yet</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notifications</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Privacy</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>About</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileInitial: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#999',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 15,
  },
  placeholder: {
    height: 120,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
    fontSize: 14,
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
  },
  settingText: {
    fontSize: 16,
    color: COLORS.text,
  },
  logoutButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#ff4444',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '600',
  },
})

export default ProfileScreen
