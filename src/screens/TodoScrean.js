import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../componets/ui/AppCard";
import { EditModal } from "../componets/EditModal";
import { AppTextBolt } from "../componets/ui/AppTextBolt";

export const TodoScreen = ({ backToApp, todo, onRemove, onSav }) => {
  const [modal, setModal] = useState(false);

  saveHandel = (title) => {
    setModal(false);
    onSav(todo.id, title);
  };
  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => {
          setModal(false);
        }}
        value={todo.title}
        onSave={saveHandel}
      />
      <AppCard style={styles.card}>
        <AppTextBolt style={styles.textim}>{todo.title}</AppTextBolt>
        <Button
          title="redact"
          onPress={() => {
            setModal(true);
          }}
        />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="back" color={THEME.GRAY_COLOR} onPress={backToApp} />
        </View>
        <View style={styles.button}>
          <Button
            color={THEME.DANGER_COLOR}
            title="delete"
            onPress={() => onRemove(todo.id)}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttons: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  textim: {
    fontSize: 26,
  },
  card: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 8,
    padding: 15,
    margin: 20,
  },
});
