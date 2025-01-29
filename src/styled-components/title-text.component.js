import React from "react";
import styled from "styled-components/native";

const weightVariant = {
  regular: 400,
  bold: 700,
};

const sizeVariant = {
  caption: 12,
  button: 14,
  body: 16,
  mid: 18,
  subtitle: 20,
  title: 24,
  h5: 28,
  h4: 34,
  h3: 45,
  h2: 56,
  h1: 112,
};

const colorVariant = {
  primary: "#748816",
  secondary: "#ffffff",
  tertiary: "#C6DC3B",
  quaternary: "#fff8e7",
  error: "#932216",
  dark: "#212725"
};

const alignVariant = {
  left: "left",
  center: "center",
  right: "right",
};

const getVariant = (weight, size, color, align) => {
  const weightValue = weightVariant[weight];
  const sizeValue = sizeVariant[size];
  const colorValue = colorVariant[color];
  const alignValue = alignVariant[align];

  return `fontWeight: ${weightValue} fontSize: ${sizeValue}px color:${colorValue} textAlign:${alignValue}`;
};

const TText = styled.Text`
  ${({ variant }) => variant}
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const TitleText = ({ 
  weight = "regular", 
  size = "title", 
  color = "primary", 
  align = "center", 
  children 
}) => {
  const variant = getVariant(weight, size, color, align);
  return <TText variant={variant}>{children}</TText>;
};

