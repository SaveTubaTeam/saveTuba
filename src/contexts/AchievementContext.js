import { Text, View } from "react-native";
import React, { Component, createContext } from "react";

export const AchievementContext = createContext();

class AchievementContextProvider extends Component {
  state = {
    user: null,
    achievements: [],
    
  };
  render() {
    return (
      <AchievementContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AchievementContext.Provider>
    );
  }
}

export default AchievementContextProvider;
