import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#36F",
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  textStyle: {
    fontSize: 20,
    color: "#FFF"
  }
};

export default Header;
