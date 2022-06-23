import React, { useState } from "react";
import { View, TextInput, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-paper";

import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import { ImageBg } from "../../grades.styles";

const ImagePrompt = ({ questions }) => {
  const [currentPrompt, setPrompt] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "80%",
            backgroundColor: "white",
            marginTop: 20,
            marginBottom: 10,
            height: 300,
            borderRadius: 30,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "white",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <ImageBg
                source={questions.prompts[currentPrompt].image}
                resizeMode="cover"
              ></ImageBg>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              textAlignVertical: "center",
            }}
          >
            <TitleText size="subtitle">
              Что такое имидж? {"\n"}Почему это важно?
            </TitleText>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 10,
            height: 250,
            borderRadius: 30,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 240,
              backgroundColor: "white",
              borderRadius: 30,
            }}
          >
            <View
              style={{
                flex: 1,
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 20,
                alignContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  fontFamily: "BalsamiqSans_400Regular",
                  color: "#748816",
                  fontSize: 18,
                  flexShrink: 1,
                }}
                placeholder="Введите ответ..."
                placeholderTextColor={"#748816"}
                multiline={true}
              />
              <Button
                style={{
                  width: "80%",
                  height: 40,
                  backgroundColor: "#748816",
                  alignSelf: "center",
                  borderRadius: 20,
                }}
                onPress={() => {
                  if (currentPrompt < questions.numberOfPrompts - 1) {
                    setPrompt(currentPrompt + 1);
                  } else {
                    setModalVisible((modalVisible) => !modalVisible);
                    console.log("Yo: " + modalVisible);
                  }
                }}
              >
                <BodyText color="secondary">Отправить</BodyText>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const OpenResponseHandler = ({ questionSet }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBg
        source={require("../../../../../assets/promptBackground.jpg")}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            width: "90%",
          }}
        >
          <ImagePrompt questions={questionSet} />
        </View>
      </ImageBg>
    </View>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(OpenResponseHandler);
