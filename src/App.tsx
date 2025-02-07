import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect } from 'react'


import { setupPlayer,addTrack } from '../musicPlayerServices'
const App = () => {
  return (
    <View>
      <Text>Spotify like clone</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({


  container:{
    flex:1
  }
})