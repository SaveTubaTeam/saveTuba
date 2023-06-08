import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";

import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import { Spacer } from "../../../spacer.component";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const ModalContainer = styled.View`
  background-color: white;
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #cce882;
`;

const Prompt = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 60%;
  height: 40px;
  background-color: #748816;
  align-self: center;
  justify-content: center;
  border-radius: 20px;
`;

const Item = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
`;

const ReorderHandler = ({
  info,
  selectedGrade,
  selectedChapter,
  selectedLesson,
}) => {
  // console.log(info.data);

  const [data, setData] = useState(info.data);
  const [visible, setVisible] = useState(false);
  
  const { t } = useTranslation();
  const navigation = useNavigation();

  console.log("here_1");
  const Modko = () => {
    return (
      <Modal transparent animationType="slide" visible={visible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ModalContainer>
            <View>
              <BodyText size="subtitle">
                Your response was submitted! Good job ✨
              </BodyText>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#748816",
                borderRadius: 10,
                marginTop: 10,
                paddingTop: 5,
                paddingBottom: 5,
              }}
              onPress={() => navigation.navigate("Lesson")}
            >
              <BodyText size="subtitle" color="secondary">
                Back to the lesson
              </BodyText>
            </TouchableOpacity>
          </ModalContainer>
        </View>
      </Modal>
    );
  };
  console.log("here_2");
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <>
        <Item
          style={{ backgroundColor: isActive ? item.active : item.dormant }}
          activeOpacity={1}
          onLongPress={drag}
          disabled={isActive}
        >
          <BodyText color="secondary" size="subtitle">
            {item.text}
          </BodyText>
        </Item>
      </>
    );
  };
  console.log("here_3");
  return (
    <>
      <Container>

        {/* <Text>Hello World</Text> */}
        <DraggableFlatList
          scrollEnabled={false} //if true - first item is not draggable
          data={data}
          style={{ width: "90%" }}
          onDragEnd={({ data }) => setData(data)}
          keyExtractor={(index) => index}
          renderItem={renderItem}
          ListHeaderComponentStyle={{ alignItems: "center", marginTop: 10 }}
          ListHeaderComponent={
            <Text>Hello World</Text>
            // <Prompt>
            //   <TitleText size="subtitle">{info.prompt}</TitleText>
            //   <Spacer size="medium" />
            //   <TitleText size="caption">
            //     Hint: Long press to drag the items.
            //   </TitleText>
            // </Prompt>
          }
          ListFooterComponentStyle={{ marginTop: 10 }}
          ListFooterComponent={
            <Text>Hello World</Text>
            // <SubmitButton onPress={() => setVisible(!visible)}>
            //   <BodyText color="secondary" size="subtitle">
            //     {t("common:submit")}
            //   </BodyText>
            // </SubmitButton>
          }
        />



        <Modko visible={false} />
      </Container>
    </>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(ReorderHandler);
