import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList, Image } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";
import { TitleText } from "../../title-text.component";
import { BodyText } from "../../body-text.component";
import { ImageBg } from "../grades.styles";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Prompt = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
`;


const MasteryHandler2 = ({
    data,
    selectedGrade,
    selectedChapter,
    selectedLesson,
}) => {

    const [text, setText] = useState("");

    const renderItem = ({ item }) => {
        return (
            <>
                <Prompt>
                    <text>{item.text}</text>

                </Prompt>
            </>


        );
    };

    return (
        <Container>
            data =  {
                selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                    .mastery_2.cards &&
                Object.values(
                    selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                        .mastery_2.cards
                )
            }
            <text>{data.name}</text>

        </Container>

    );
};