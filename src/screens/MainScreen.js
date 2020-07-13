import React from "react";
import { StyleSheet, View, FlatList, Image} from "react-native";
import { AddTodo } from "../componets/AddTodo";
import { Todo } from "../componets/Todo";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  let content = (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={todos}
      renderItem={({ item }) => (
        <Todo
          todo={item}
          onRemove={() => {
            removeTodo(item.id);
          }}
          onOpen={openTodo}
        />
      )}
    />
  );

  if(todos.length===0){
    content = <View style={styles.imgWrap}>
      <Image
      style={styles.image}
      source={require('../../assets/no-items.png')}/>
    </View>
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};
const styles = StyleSheet.create({
  imgWrap:{
    alignItems:'center',
    justifyContent:'center',
    height:300
  },
  image:{
    resizeMode:'cover',
    width:'100%',
    height:'100%'
  }
});
