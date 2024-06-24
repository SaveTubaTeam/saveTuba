import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderComponent({ title }) {
   return (
      <View style={styles.header}>
         <Text style={styles.headerText}>
            {title}
         </Text>
 
         <TouchableOpacity style={styles.parentIcon}>
            <Ionicons name="people-circle" size={45} color="#748816" />
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({ 
   header: {
      width: "100%",
      backgroundColor: "#C6DC3B",
      borderBottomWidth: 0.5,
      borderBottomColor: "#748816",
      flexDirection: "row",
   },
   headerText: {
      fontFamily: "BalsamiqSans_400Regular",
      color: "#748816",
      fontSize: 20,
      paddingBottom: 15,
      paddingLeft: 15
   },
   parentIcon: {
    position: "absolute",
    right: 15,
    bottom: 5
  }
})