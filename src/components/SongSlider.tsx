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
      maximumTrackTintColor='#FFF'
   style={styles.sliderContainer}
   
   />

   <View style={styles.timeContainer}>
<Text style={styles.time}>

{new Date(position*1000).toISOString().substring(15,19)}

</Text>
<Text style={styles.time}>

{new Date((duration-position)*1000).toISOString().substring(15,19)}

</Text>


   </View>
    </View>
  )
}

export default SongSlider

const styles = StyleSheet.create({})