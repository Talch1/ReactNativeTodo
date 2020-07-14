import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { AppTextBolt } from "../ui/AppTextBolt";
import { THEME } from "../../theme";
export const AppButtons = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
  const Wrapper = Platform.OS === "android"?TouchableNativeFeedback:TouchableOpacity;
  return (
    <Wrapper onPress={onPress} activeOpacity={0.7}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBolt style={styles.text}>{children}</AppTextBolt>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
