import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const CameraScreen = (props) => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { currentUser } = props;

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${currentUser?.firstName}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
    >
      <TouchableOpacity onPress={snap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
    // return (

    //     <View
    //         style={{
    //             flex: 1,
    //             justifyContent: "center",
    //             alignItems: "center"
    //         }}>
    //         <Text>Camera!</Text>
    //         <TouchableOpacity style={style.roundButton1} onPress={() => navigation.push("AccountScreen")}>
    //             <Text style={style.baseText}>1</Text>
    //         </TouchableOpacity>
    //     </View>
  );
};
export default CameraScreen;

const style = StyleSheet.create({
  roundButton1: {
    width: 125,
    height: 125,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: 10,
    borderRadius: 100,
    backgroundColor: "#CCE882",
  },
});
