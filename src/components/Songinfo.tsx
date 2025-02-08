import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Track } from 'react-native-track-player'
type SongInfoProps=PropsWithChildren<{
    track: Track | null |undefined
}>

const Songinfo = ({track}:SongInfoProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>


            {track?.title}
        </Text>
        <Text style={styles.artist}>


            {track?.artist} . {track?.album}
        </Text>
       
      </View>
    </View>
  )
}

export default Songinfo

const styles = StyleSheet.create({})