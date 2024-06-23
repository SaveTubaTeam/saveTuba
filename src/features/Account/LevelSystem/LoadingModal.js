import React from "react";
import { View, Modal, TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export default function LoadingModal({ visible }) {
   return (
      <Modal transparent animationType="none" visible={visible}>
         <Container>
            <ActivityIndicator 
               size="large" 
               color="#C6DC3B" 
               style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} 
               animating={visible}
            /> 
         </Container>
      </Modal>
   );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.4);
`;