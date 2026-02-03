import React from 'react'
import {  StyleSheet, ScrollView } from 'react-native'
import COLORS from '../../constants/colors'
import OverviewSection from './OverviewSection';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <OverviewSection />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
})

export default Home
