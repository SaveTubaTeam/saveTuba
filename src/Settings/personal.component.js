import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/slices/userSlice";
import { TitleText } from "../../../styled-components/title-text.component";
import { Spacer } from "../../../styled-components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";
import { Image } from "expo-image";

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
        style={{ width: 180, height: 180, borderRadius: 180, position: "absolute" }}
        source={{ uri: user.photoURL }}
      />
    )
  } else {
    userIcon = null;
  }

  return (
    <Card>
      <View style={{ alignItems: "center" }}>
        <Spacer position="bottom" size="large">
          <Row>
          <Avatar.Icon
            size={180}
            icon="head"
            backgroundColor={theme.colors.ui.tertiary}
            style={{ position: "relative", zIndex: -1 }}
          />
          {userIcon}

            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faCamera}
                size={60}
                style={{ position: 'absolute', top: 20, right: -10, color: theme.colors.ui.primary, zIndex: 1 }}
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
