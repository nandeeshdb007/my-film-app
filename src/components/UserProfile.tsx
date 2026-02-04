import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import COLORS from '../constants/colors'
import { launchImageLibrary } from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'

const STORAGE_KEY = 'PROFILE_IMAGE_BASE64'

const UserProfile = () => {
  const [imageBase64, setImageBase64] = useState<string | null>(null)

  useEffect(() => {
    loadImage()
  }, [])

  const loadImage = async () => {
    const storedImage = await AsyncStorage.getItem(STORAGE_KEY)
    if (storedImage) setImageBase64(storedImage)
  }

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      quality: 0.7,
    })

    if (result.didCancel) return

    const base64 = result.assets?.[0]?.base64
    if (!base64) return

    await AsyncStorage.setItem(STORAGE_KEY, base64)
    setImageBase64(base64)
  }

  const deleteImage = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY)
    setImageBase64(null)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <TouchableOpacity onPress={pickImage}>
            {imageBase64 ? (
              <Image
                source={{ uri: `data:image/jpeg;base64,${imageBase64}` }}
                style={styles.profilePhoto}
              />
            ) : (
              <View style={styles.profileImage}>
                <Text style={styles.profileInitial}>U</Text>
              </View>
            )}
          </TouchableOpacity>

          {imageBase64 && (
            <TouchableOpacity style={styles.deleteBtn} onPress={deleteImage}>
              <Ionicons name="close" size={16} color="#fff" />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.profileName}>User Profile</Text>
        <Text style={styles.profileEmail}>user@example.com</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginTop: 30,
  },
  header: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  imageWrapper: {
    position: 'relative',
    marginBottom: 15,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  deleteBtn: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 4,
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
  },

  profileEmail: {
    fontSize: 14,
    color: '#999',
  },
})

export default UserProfile
