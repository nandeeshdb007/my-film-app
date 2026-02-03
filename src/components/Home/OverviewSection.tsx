import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


const OverviewSection = () => {
  return (
    <View style={styles.overview}>
      <Image
        style={styles.overviewImage}
        source={require('../../../assests/images/overview.png')}
      />

      <View style={styles.cover}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <Image
                source={require('../../../assests/images/profile.jpg')}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.greeting}>Hi, User</Text>
                <Text style={[styles.greeting, { fontSize: 12 }]}>
                  Welcome back!
                </Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.searchWrapper}>
              <Ionicons name={'search'} size={20} color={COLORS.text} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <LinearGradient
          colors={['transparent', COLORS.primary]}
          style={styles.blur}
        >
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
                <Text numberOfLines={1} style={{fontSize:26, fontWeight:"600", color:COLORS.text, flex:1}}>The Sand Man</Text>
               <TouchableOpacity activeOpacity={.8} style={styles.playButton}>
                 <Ionicons name={'play'} size={28} color={COLORS.text} />
               </TouchableOpacity>
            </View>
            <Text style={{color:"gray"}}>2025 | Monster | Horror</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default OverviewSection;

const styles = StyleSheet.create({
  overview: {
    height: 400,
    position: 'relative',
  },
  overviewImage: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  cover: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  profileImage: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  greeting: {
    color: COLORS.text,
    fontWeight: '600',
    fontSize: 22,
  },
  searchWrapper: {
    height: 50,
    width: 50,
    backgroundColor: '#3b3c48',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blur:{
    height:100,
    width:'100%',
    padding:14,
    justifyContent:"space-around",
  },
  playButton:{
    height:40,
    width:40,
    borderRadius:"50%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#1b1b1c"
  }
});
