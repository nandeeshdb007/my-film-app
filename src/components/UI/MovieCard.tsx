import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { hs, ms, vs } from '../../utils/screen-dimensions'
import COLORS from '../../constants/colors'
import { MovieCardProps } from '../../types/HomeScreen'

const MovieCard = ({genre, title, image}:MovieCardProps) => {
  return (
    <TouchableOpacity activeOpacity={.8} style={styles.container}>
      <Image
      source={image}
      style={styles.image}
      />
      <View style={{alignItems:"center"}}>
        <Text numberOfLines={1} style={{color:COLORS.text, fontWeight:"600" , fontSize: ms(14)}}>{title}</Text>
        <Text numberOfLines={1} style={{color:"gray" , fontSize: ms(10)}}>{genre}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MovieCard

const styles = StyleSheet.create({
    container:{
        width: hs(110),
        marginHorizontal:8,
        marginBottom:14
    },
    image:{
        height: vs(150),
        width:"100%",
        borderRadius:10
    }
})