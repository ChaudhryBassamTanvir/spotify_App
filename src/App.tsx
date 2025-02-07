import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect } from 'react'


import { setupPlayer,addTrack } from '../musicPlayerServices'
const App = () => {



  const [isPlayerReady,setIsPlayerReady]=useState(false)

  async function setup() {
    let isSetup= await setupPlayer()
  }

useEffect(()=>{


},[])

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