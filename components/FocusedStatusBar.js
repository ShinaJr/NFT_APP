import { StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = ({ background, barStyle, translucent }) => {
  //We might want to render different content based on the current focus state of the screen. The library exports a useIsFocused hook to make this easier: using this hook triggers a re-render for the screen when it changes focus.
  const isFocused = useIsFocused();
  //here we will return the status bar if the isFocused is true and null if otherwise..
  return isFocused ? (
    <StatusBar
      animated={true}
      backgroundColor={background}
      barStyle={barStyle}
      translucent={translucent}
    />
  ) : null;
};

export default FocusedStatusBar;
