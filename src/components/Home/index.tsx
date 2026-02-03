import React from 'react'
import {  StyleSheet, ScrollView, View } from 'react-native'
import COLORS from '../../constants/colors'
import OverviewSection from './OverviewSection';
import SectionHeader from './SectionHeader';
import MovieCard from '../UI/MovieCard';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <OverviewSection />
      <View style={{flex:1}}>
        <View style={{marginVertical: 20}} >
          <SectionHeader title='Trending now'/>
        <MovieCard />
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
})

export default Home
