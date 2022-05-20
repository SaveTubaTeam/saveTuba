import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

import { theme } from "../infrastructure/theme";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top; ${StatusBar.currentHeight}px`};
`;
