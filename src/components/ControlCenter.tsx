import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import { playbackService } from '../../musicPlayerServices'
import Icon from "react-native-vector-icons/MaterialIcons"

const ControlCenter = () => {
  const playBackState:any = usePlaybackState()

  // Next Button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext()
  }

  // Previous Button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious()
  }

  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getActiveTrackIndex()

    if (currentTrack != null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play()
      } else {
        await TrackPlayer.pause()
      }
    }
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>

      <Pressable onPress={() => togglePlayback(playBackState)}>
        <Icon
          style={styles.icon}
          name={playBackState.state === State.Playing ? "pause" : "play"}
          size={40}
        />
      </Pressable>

      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  )
}

export default ControlCenter

const styles = StyleSheet.create({
  container: {
    // Add your styles here
  },
  icon: {
    // Add your styles here
  }
})