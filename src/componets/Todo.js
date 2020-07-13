import React from "react";
import {  View, StyleSheet, TouchableOpacity } from "react-native";

import { AppTextReg } from "./ui/AppTextReg";

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onOpen(todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.todo}>
        <AppTextReg>{todo.title}</AppTextReg>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    marginBottom: 15,
    flexDirection: "row",
    padding: 15,
    alignContent: "center",
    borderColor: "#eee",
    borderWidth: 1,
  }
});
