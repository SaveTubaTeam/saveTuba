import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

import { theme } from "../infrastructure/theme";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding: ${(props) => props.theme.sizes[2]};
  ${StatusBar.currentHeight && `margin-top; ${StatusBar.currentHeight}px`};
`;
