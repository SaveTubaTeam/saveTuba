import React, { useState } from "react";
import styled from "styled-components/native";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useTranslation } from "react-i18next";
import { storage } from "../../../../firebase";
import { uploadBytes } from "firebase/storage";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/slices/userSlice";
import CompletionModal from "../../../features/Account/LevelSystem/CompletionModal";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import LoadingModal from "../../../features/Account/LevelSystem/LoadingModal";
import Toast from 'react-native-toast-message';
import FileModal from "./FileModal";

import { BodyText } from "../../body-text.component";

const ImageBox = styled.TouchableOpacity`
  border: 2px #748816 dashed;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  width: 90%;
`;

const Prompt = styled.View`
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
  align-self: center;
`;

const File = styled.TouchableOpacity`
  padding: 10px;
  width: 95%
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #808080;
  align-self: center;
`;

const SubmitButton = styled.TouchableOpacity`
  margin-top: 5px
  width: 55%;
  height: 40px;
  background-color: #748816;
  align-self: center;
  justify-content: center;
  border-radius: 20px;
`;

export default function ImageUpload({ score, prompt }) {
  const [imageAssetsArray, setImageAssetsArray] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const { t } = useTranslation();
  const user = useSelector(selectCurrentUser);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);

  const [showSelectedFile, setShowSelectedFile] = useState(false);
  const [selectedFileContent, setSelectedFileContent] = useState(null);
  //console.log(user);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({ //see: https://docs.expo.dev/versions/latest/sdk/imagepicker/
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      allowsMultipleSelection: true,
      quality: 0, //compresses image to lowest quality for this library
    });

    console.log(result);
    if (!result.canceled) {
      setImageAssetsArray(result.assets);
    }
  };

  async function uploadImageAsync(uri) {
    setImageUploading(true);
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        //reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    let imageFileName = uri.substring(uri.lastIndexOf('/') + 1);
    //console.log(imageFileName);
  
    const fileRef = storage.child(`classes/${user.classCode}/${user.email}/${imageFileName}`);
    //console.log(fileRef);
    await uploadBytes(fileRef, blob);
  
    // We're done with the blob, close and release it
    blob.close();

    console.log(`${imageFileName} uploaded to: classes/${user.classCode}/${user.email}/${imageFileName}`)
  
    //return await getDownloadURL(fileRef);
  }

  const renderItem = ({ item, index }) => {

    let file = item.fileName;
    if (item.fileName.length > 30) {
      file = item.fileName.substring(item.fileName.length - 30);
    }
    return (
      <File 
        key={index}
        onPress={() => {
          setShowSelectedFile(true);
          setSelectedFileContent(item);
        }}
      >
        <BodyText size="button" color="secondary">{file}</BodyText>
      </File>
  )}

  /* marked for translation */
  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'No Photo Selected',
      text2: 'Select photos or videos from your photo library',
      visibilityTime: 2000,
    });
  }

  return (
    <Prompt>
      <ImageBox onPress={pickImage}>
        {/* marked for translation */}
        <BodyText size="subtitle">{t("common:pickanimage")}</BodyText>
      </ImageBox>

      {imageAssetsArray && imageAssetsArray.map((item, index) => {
        
        let file = item.fileName;
        if (item.fileName.length > 30) {
          file = item.fileName.substring(item.fileName.length - 30);
        }

        return (
          <File 
            key={index}
            onPress={() => {
              setShowSelectedFile(true);
              setSelectedFileContent(item);
            }}
          >
            <BodyText size="button" color="secondary">{file}</BodyText>
          </File>
        );
      })}

      <SubmitButton onPress={async() => {
        if(imageAssetsArray) {
          try {
            for(let i=0; i<imageAssetsArray.length; i++) {
              await uploadImageAsync(imageAssetsArray[i].uri);
            }
            setImageUploading(false);
            setCompletionModalVisible(!completionModalVisible);
          } catch (error) {
            console.warn(error);
          }
        } else {
          showToast();
        }
      }}>
        <BodyText color="secondary" size="subtitle">
          {t("common:submit")}
        </BodyText>
      </SubmitButton>

      <CompletionModal score={score} visible={completionModalVisible} prompt={t(prompt)} />

      <LoadingModal visible={imageUploading} />

      <FileModal showSelectedFile={showSelectedFile} setShowSelectedFile={setShowSelectedFile} content={selectedFileContent} />
    </Prompt>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});