import React, { useState } from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../componets/ui/AppCard";
import { EditModal } from "../componets/EditModal";
import { AppTextBolt } from "../componets/ui/AppTextBolt";
import { AppButtons } from "../componets/ui/AppButtons";
import { AntDesign ,FontAwesome} from "@expo/vector-icons";


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
        <AppButtons
          onPress={() => {
            setModal(true);
          }}
        ><FontAwesome
        size ={20}
        name = 'edit'
        /></AppButtons>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButtons  color={THEME.GRAY_COLOR} onPress={backToApp} >
            <AntDesign name ='back'
            size={20}/>
            </AppButtons>
        </View>
        <View style={styles.button}>
          <AppButtons
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}>
                  <AntDesign name ='delete'
            size={20}/>
          </AppButtons>
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
    width: Dimensions.get('window').width /3,
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
