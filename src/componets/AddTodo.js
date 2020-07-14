import React, { useState } from "react";
import { View, TextInput, StyleSheet, Keyboard, Alert } from "react-native";
import { THEME } from "../theme";
import { AntDesign } from "@expo/vector-icons";


export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHendler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      Keyboard.dismiss()
    } else {
      Alert.alert("Todo Empty");
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.text}
        onChangeText={setValue}
        value={value}
        placeholder="please enter todo"
        autoCorrect={false}
      />
      <View style={styles.button}>
        <AntDesign.Button
          onPress={pressHendler}
          name="pluscircle"
        >
            Add
        </AntDesign.Button>
      </View>

      {/* <Button title = 'ADD' onPress={pressHendler}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  text: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
