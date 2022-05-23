import React from "react";
import { Image, ScrollView, View } from "react-native";
import styled from "styled-components";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { render } from "react-dom";
import { BodyText } from "../../../../../../components/body-text.component";
import { TitleText } from "../../../../../../components/title-text.component";
import { Spacer } from "../../../../../../components/spacer.component";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Checklist = styled.View`
  margin-top: 20px;
  margin: 20px;
`;
const Item = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

const MasteryScreen = () => {
  return (
    <>
      <ScrollView directionalLockEnabled={true}>
        <Container>
          <BodyText size="subtitle">
          Парниковый эффект может быть вредным, если в атмосферу попадает слишком много углекислого газа. Однако растениям может быть полезно поддерживать необходимый уровень температуры и влажности, если они используются в садах. 
          </BodyText>
          <Spacer size="large" />
          <BodyText size="subtitle">
          Сегодня мы собираемся построить крошечную теплицу для растений, которые мы посадили на предыдущем уроке. Его легко сделать из полиэтиленовой пленки и деревянных палочек.
          </BodyText>
          <Image
            style={{
              marginTop: 10,
              marginBottom: 10,
              width: "100%",
              height: undefined,
              aspectRatio: 1,
            }}
            resizeMode="contain"
            source={require("../../../../../../../assets/greenhouse.png")}
          />
        </Container>
      </ScrollView>
    </>
  );
};

export default MasteryScreen;
