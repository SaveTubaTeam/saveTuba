import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

import { SafeArea } from "../../../../../../../components/safe-area.component";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Drawing = () => {
  return (
    <SafeArea>
      <Container>
        <Text>hi</Text>
      </Container>
    </SafeArea>
  );
};

export default Drawing;
