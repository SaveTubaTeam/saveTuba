import React, { useState } from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useTranslation } from "react-i18next";

import { BodyText } from "../../body-text.component";

const ImageBox = styled.TouchableOpacity`
  border: 2px #748816 dashed;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  width: 90%;
`;

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const { t } = useTranslation();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <ImageBox onPress={pickImage}>
        <BodyText size="subtitle">{t("common:pickanimage")}</BodyText>
      </ImageBox>

      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 250,
            height: 250,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
      )}
    </>
  );
}
