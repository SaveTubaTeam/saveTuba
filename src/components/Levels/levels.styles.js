import React from "react";
import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #9cd1d0;
`;

export const Mastery = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 68%;
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.sizes[4]};
  margin-top: ${(props) => props.theme.space[3]};
`;

export const Adventure = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
`;

export const ImageBg = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  justify-content: center;
`;
