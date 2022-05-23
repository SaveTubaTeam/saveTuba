import React, { Component } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { BodyText } from "../../../../../../components/body-text.component";
import { Spacer } from "../../../../../../components/spacer.component";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Checklist = styled.View`
  margin-top: 20px;
`;

const Item = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export default class MasteryScreen extends Component {
  render() {
    return (
      <Container>
        <BodyText size="subtitle">
          Задача этой недели будет связана с сохранением воды
          {/* This week's challenge will be connected to water conservation. */}
        </BodyText>
        <Image
          style={{ flex: 1 }}
          resizeMode="contain"
          source={require("../../../../../../../assets/water-drop.png")}
        />
        <BodyText size="subtitle">
          Создайте плейлист для душа на неделю. Задача состоит в том, что ваш душ должен состоять не более чем из 2 песен.
          {/* The length of your showers should not be longer than one song. */}
        </BodyText>
        <Spacer size="large" />
        <BodyText size="subtitle">
          Ставьте галочку каждый день, когда вы выполняете задание.

          {/* Tick the box each day you complete the challenge. */}
        </BodyText>
        <Checklist>
          <Item>
            <BouncyCheckbox fillColor="#748816" />
            <BodyText size="subtitle">Day 1</BodyText>
          </Item>
          <Item>
            <BouncyCheckbox fillColor="#748816" onPress={() => { }} />
            <BodyText size="subtitle">Day 2</BodyText>
          </Item>
          <Item>
            <BouncyCheckbox fillColor="#748816" onPress={() => { }} />
            <BodyText size="subtitle">Day 3</BodyText>
          </Item>
          <Item>
            <BouncyCheckbox fillColor="#748816" onPress={() => { }} />
            <BodyText size="subtitle">Day 4</BodyText>
          </Item>
          <Item>
            <BouncyCheckbox fillColor="#748816" onPress={() => { }} />
            <BodyText size="subtitle">Day 5</BodyText>
          </Item>
          <Item>
            <BouncyCheckbox fillColor="#748816" onPress={() => { }} />
            <BodyText size="subtitle">Day 6</BodyText>
          </Item>
          <Item>
            <BouncyCheckbox fillColor="#748816" onPress={() => { }} />
            <BodyText size="subtitle">Day 7</BodyText>
          </Item>
        </Checklist>
      </Container>
    );
  }
}
