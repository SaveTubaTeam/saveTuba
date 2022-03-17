import styled from "styled-components";

import { theme } from "../infrastructure/theme";

export const Card = styled.View`
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[2]};
  width: 90%;
  border-radius: ${(props) => props.theme.sizes[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
