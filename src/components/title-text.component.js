import React from "react";
import styled from "styled-components/native";

const weightVariant = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const sizeVariant = {
  caption: 12,
  button: 14,
  body: 16,
  title: 24,
  h5: 24,
  h4: 34,
  h3: 45,
  h2: 56,
  h1: 112,
};

const colorVariant = {
  primary: "#748816",
  secondary: "#ffffff",
  tertiary: "#C6DC3B",
};

const getVariant = (weight, size, color) => {
  const weightValue = weightVariant[weight];
  const sizeValue = sizeVariant[size];
  const colorValue = colorVariant[color];

  return `fontWeight: ${weightValue} fontSize: ${sizeValue}px color:${colorValue}`;
};

const TText = styled.Text`
  ${({ variant }) => variant}
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const TitleText = ({ weight, size, color, children }) => {
  const variant = getVariant(weight, size, color);
  return <TText variant={variant}>{children}</TText>;
};

TitleText.defaultProps = {
  weight: "regular",
  size: "title",
  color: "primary",
};
