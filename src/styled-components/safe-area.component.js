import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight &&
  `padding-top: ${StatusBar.currentHeight + 10}px`};
  background-color: #c6dc3b;
`;
