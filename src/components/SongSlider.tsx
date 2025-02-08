import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import { useProgress, } from 'react-native-track-player'


const SongSlider = () => {
const {position,duration}=useProgress()


  return (
    <View style={styles}>
      <Slider value={position} minimumValue={0}
      maximumValue={duration}
      thumbTintColor='#FFF'
      />
    </View>
  )
}

export default SongSlider

const styles = StyleSheet.create({})