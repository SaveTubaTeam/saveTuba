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
import { StyleSheet } from "react-native";
import LoadingModal from "../../../features/Account/LevelSystem/LoadingModal";
import Toast from 'react-native-toast-message';
import FileModal from "./FileModal";
import { BodyText } from "../../body-text.component";

export default function ImageUpload({ score, prompt }) {
  const [imageAssetsArray, setImageAssetsArray] = useState(null);
  const [finalURIArray, setFinalURIArray] = useState([]);
  const [loadingModal, setLoadingModal] = useState(false);
  const { t } = useTranslation();
  const user = useSelector(selectCurrentUser);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);

  const [showSelectedFile, setShowSelectedFile] = useState(false);
  const [selectedFileContent, setSelectedFileContent] = useState(null);
  //console.log(user);

  /* marked for translation */
  function showMaxDurationToast() {
    Toast.show({
      type: 'error',
      text1: t("error:maxduration"),
      text2: t("error:splitvideo"),
      visibilityTime: 3000,
    });
  } 

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({ //see: https://docs.expo.dev/versions/latest/sdk/imagepicker/
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      allowsMultipleSelection: true,
      quality: 0.4, //moderately compresses image
      selectionLimit: 10,
      videoExportPreset: ImagePicker.VideoExportPreset.MediumQuality, //videoExportPreset is deprecated on iOS. not sure if it works.
    });

    console.log(result);
    if (!result.canceled) {

      //video duration is in milliseconds. 300000ms = 5 mins
      const hasExcessivelyLongVideo = result.assets.some(asset => asset.duration > 300000); //see here for .some(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
      if (hasExcessivelyLongVideo) {
        showMaxDurationToast();
        return; // Prevent further processing or uploading
      }

      setImageAssetsArray(result.assets);
    }
  };

  async function uploadImageAsync(uri) {
    setLoadingModal(true);
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
    const bucketFilePath = `classes/${user.classCode}/${user.email}/${imageFileName}`
  
    const fileRef = storage.child(bucketFilePath);
    //console.log(fileRef);
    await uploadBytes(fileRef, blob);
  
    // We're done with the blob, close and release it
    blob.close();

    console.log(`${imageFileName} uploaded to: ${bucketFilePath}`)
  
    return bucketFilePath;
  }

  return (
    <Prompt>
      <ImageBox onPress={pickImage}>
        <BodyText size="subtitle">{t("common:pickanimage")}</BodyText>
      </ImageBox>

      {imageAssetsArray && imageAssetsArray.map((item, index) => {
        
        let file = item.uri;
        if (item.uri.length > 30) {
          file = item.uri.substring(item.uri.length - 30);
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
            let filePathArray = [];
            for(let i=0; i<imageAssetsArray.length; i++) {
              let bucketFilePath = await uploadImageAsync(imageAssetsArray[i].uri);
              filePathArray.push(bucketFilePath);
            }
            setFinalURIArray(filePathArray);
            setLoadingModal(false);
            setCompletionModalVisible(!completionModalVisible);
          } catch (error) {
            console.error(error);
          }
        } else {
          /* marked for translation */
          Toast.show({
            type: 'error',
            text1: t("error:nothingsubmitted"),
            text2: t("error:selectfromlibrary"),
            visibilityTime: 2000,
          });
        }
      }}>
        <BodyText color="secondary" size="subtitle">
          {t("common:submit")}
        </BodyText>
      </SubmitButton>

      <CompletionModal 
        score={score} 
        startCompletionProcess={completionModalVisible} 
        prompt={t(prompt)} 
        content={finalURIArray} 
      />

      <LoadingModal visible={loadingModal} />

      <FileModal 
        showSelectedFile={showSelectedFile} 
        setShowSelectedFile={setShowSelectedFile} 
        content={selectedFileContent} 
      />
    </Prompt>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

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