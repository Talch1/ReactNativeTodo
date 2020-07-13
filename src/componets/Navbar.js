import React from "react";
import { View,  StyleSheet } from "react-native";
import { THEME } from "../theme";
import { AppTextBolt } from "./ui/AppTextBolt";

export const Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <AppTextBolt style={styles.text}>{title}</AppTextBolt>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    backgroundColor: THEME.MAIN_COLOR,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
