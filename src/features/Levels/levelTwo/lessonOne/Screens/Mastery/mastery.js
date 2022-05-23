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
  padding-right: 20px;
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
            Supermarkets make grocery shopping simple.
          </BodyText>
          <BodyText size="subtitle">
            Но легко забыть, что все, что мы покупаем, не появляется на
            полки само собой. Все, что мы потребляем, требует времени, энергии и
            ресурсы для выращивания и производства.
          </BodyText>
          <BodyText size="subtitle">
            Мы растрачиваем эти ресурсы, когда выбрасываем пищу. Когда гниют пищевые отходы
            на свалках он выделяет парниковые газы, способствуя изменению климата
            сдача.
          </BodyText>
          <BodyText size="subtitle">
            Итак, давайте попробуем вырастить себе еду. Знаете ли вы, что вы можете расти
            травы, такие как мята, кориандр и базилик на вашем подоконнике?
          </BodyText>
          <Image
            style={{
              marginTop: 10,
              marginBottom: 10,
              width: "100%",
              height: undefined,
              aspectRatio: 4 / 2,
            }}
            resizeMode="contain"
            source={require("../../../../../../../assets/garden.png")}
          />
          <BodyText size="subtitle">
            Подумайте, каким образом выращивание собственной пищи помогает уменьшить
            последствия глобального потепления. Придумайте 5 пунктов и напишите их
            вниз.
          </BodyText>
          <Spacer size="large" />
          <View
            style={{
              backgroundColor: "#748816",
              borderRadius: 10,
              width: "95%",
              padding: 10,
              marginBottom: 20,
            }}
          >
            <BodyText size="subtitle" color="tertiary">
            Теперь давайте начнем наше садоводческое путешествие. Следуй этим шагам:
            </BodyText>
            <Checklist>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" />
                <BodyText size="subtitle" color="tertiary">
                  Определитесь с семенами или растением
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  Найдите солнечный подоконник
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  Найдите небольшие горшки для ваших растений.
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  Получите почвенную смесь
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  В горшках смешайте почву с небольшим количеством воды.
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  Положите свои семена в
                </BodyText>
              </Item>
            </Checklist>
          </View>
          <BodyText size="subtitle">
            Не забудьте прочитать инструкции на пакетах с семенами о том, как
            далеко они должны быть друг от друга и как глубоко надо сажать
            их. Не забывайте регулярно поливать растения и получать
            достаточно солнечного света.
          </BodyText>
          <BodyText size="subtitle">
            фотографию своего сада учителю.
          </BodyText>
          <BodyText size="subtitle">
          Поздравляем, вы только что помогли уменьшить количество
            парниковые газы в атмосфере!
          </BodyText>
        </Container>
      </ScrollView>
    </>
  );
};

export default MasteryScreen;
