import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'

const SectionHeader = ({title}:{title:string}) => {
  return (
    <View style={styles.header}>
      <Text style={{color: COLORS.text, fontWeight:"600", fontSize:16}}>{title}</Text>
      <TouchableOpacity activeOpacity={0.8} style={{padding:10}}>
        <Text style={{color:COLORS.secondary}}>
            See more
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
   header:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:14,
    paddingHorizontal:14,
   }
})