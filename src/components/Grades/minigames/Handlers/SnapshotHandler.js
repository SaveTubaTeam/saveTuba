import React, { useState } from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import ImageUpload from "../ImageUpload";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const Prompt = styled.View`
  width: 80%;
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

const SnapshotHandler = ({
  data,
  selectedGrade,
  selectedChapter,
  selectedLesson,
}) => {
  const [text, setText] = useState("");
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Prompt>
          <TitleText size="subtitle">{data.prompt}</TitleText>
        </Prompt>
        <Prompt>
          <ImageUpload />
          <SubmitButton>
            <BodyText color="secondary" size="subtitle">
              {t("common:submit")}
            </BodyText>
          </SubmitButton>
        </Prompt>
      </Container>
    </>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(SnapshotHandler);
