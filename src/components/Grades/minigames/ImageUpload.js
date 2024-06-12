import React, { useState } from "react";
import styled from "styled-components/native";
import { Image } from "expo-image";
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
    let result = await ImagePicker.launchImageLibraryAsync({ //see: https://docs.expo.dev/versions/latest/sdk/imagepicker/
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
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
