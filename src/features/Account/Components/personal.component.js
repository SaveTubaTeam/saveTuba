import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/slices/userSlice";
import { TitleText } from "../../../components/title-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PersonalCard = () => {
  const { t } = useTranslation();
  const user = useSelector(selectCurrentUser);

  let userIcon;
  if(user.photoURL) {
    userIcon = (
      <Image 
        style={{ width: 180, height: 180, borderRadius: 180 }}
        source={{ uri: user.photoURL }}
      />
    )
  } else {
    userIcon = (
      <Avatar.Icon
        size={180}
        icon="head"
        backgroundColor={theme.colors.ui.tertiary}
      />
    )
  }

  return (
    <Card>
      <View style={{ alignItems: "center" }}>
        <Spacer position="bottom" size="large">
          <Row>
            {userIcon}

            <TouchableOpacity
              //onPress={() => navigation.navigate("CameraScreen")}
            >
              <FontAwesomeIcon
                icon={faCamera}
                size={60}
                style={{
                  position: 'absolute',
                  top: 20,
                  right: -10,
                  color: theme.colors.ui.primary,
                }}
              />
            </TouchableOpacity>
          </Row>
        </Spacer>

        <TitleText size="subtitle">{`${user.email}`}</TitleText>
      </View>
    </Card>
  );
}

export default PersonalCard;
