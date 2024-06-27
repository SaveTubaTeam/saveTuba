import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import { pageBack } from "../../../redux/slices/curriculumLocationSlice";
import { useNavigation } from "@react-navigation/native";

export const Header = ({ title, back, reduxParam }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
      <View style={styles.headerContainer}>

        <TouchableOpacity style={styles.backButton}
          onPress={() => { 
            navigation.navigate(back);
            dispatch(pageBack({ curriculumLayer: reduxParam }));
          }}
        >
          <Ionicons name="chevron-back" size={26} color="#748816" />
        </TouchableOpacity>

        <Text style={styles.text}>
          {title}
        </Text>

      </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    justifyContents: "center",
    alignItems: "center",
    backgroundColor: "#C6DC3B",
  },
  backButton: {
    position: "absolute",
    left: 10,
    flexDirection: "row",
    paddingTop: 3,
  },
  text: {
    fontFamily: "BalsamiqSans_400Regular",
    color: "#748816",
    fontSize: 20,
    paddingBottom: 10,
  }
})

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Summary = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 68%;
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
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
  width: 44%;
  margin: 10px;
`;

export const ImageBg = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;
