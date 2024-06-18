import React, { useState, useRef } from "react";
import { View, Modal, TouchableOpacity, ActivityIndicator, StyleSheet, Button } from "react-native";
import styled from "styled-components/native";
import { BodyText } from "../../body-text.component";
import { Image } from "expo-image";
import { Video, ResizeMode } from 'expo-av';

export default function FileModal({ showSelectedFile, setShowSelectedFile, content }) {
   const video = useRef(null);
   const [status, setStatus] = useState({});

   let file = null;
   if(content && content.type === 'image') {
      file = (
      <>
         <Image
          source={{ uri: content.uri }}
          style={styles.file}
         />
         <TouchableOpacity
            style={{ 
            position: "absolute", 
            right: 50, top: 50, 
            transform: [{ scaleX: 2 }, { scaleY: 2 }],
            zIndex: 1,
            }}
            onPress={() => setShowSelectedFile(false)}
         >
            <BodyText>❌</BodyText>
         </TouchableOpacity>
      </>
   )} else if(content && content.type === 'video') {
      file = (
      <View style={styles.container}>
      <Video
        ref={video}
        style={styles.file}
        source={{
          uri: content.uri,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      <TouchableOpacity
         style={{ 
         position: "absolute", 
         right: 30, top: 110, 
         transform: [{ scaleX: 2 }, { scaleY: 2 }],
         zIndex: 1,
         }}
         onPress={() => setShowSelectedFile(false)}
      >
         <BodyText>❌</BodyText>
      </TouchableOpacity>
    </View>
   )}

   return (
      <Modal 
         transparent={true} 
         animationType="fade" 
         visible={showSelectedFile}
         onRequestClose={() => setShowSelectedFile(false)}
      >
         <Container>

            {file}

         </Container>
      </Modal>
   );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.6);
`;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
   },
   file: {
      width: 350,
      height: 700,
      borderRadius: 5,
      marginBottom: 10,
      borderColor: "#323B09",
      borderWidth: 3,
      backgroundColor: "#323B09"
   },
   buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: "60%",
      height: 40,
      backgroundColor: "#748816",
      borderRadius: 20,
   },
});