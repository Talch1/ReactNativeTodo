import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./../componets/Navbar";
import { MainScreen } from "./MainScreen";
import { TodoScreen } from "./TodoScrean";
import { TodoContext } from "../context/todo/todoContext";

export const MainLayout = () => {
  const {todos,addTodo,removeTodo,updateTodo} = useContext(TodoContext);
  // const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);

  // const addTodo = (title) => {
  //   setTodos((prev) => [
  //     ...prev,
  //     {
  //       id: Date.now().toString(),
  //       title,
  //     },
  //   ]);
  // };
  let context = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeTodo={(todoId) => {
        removeTodo(todoId);
      }}
      openTodo={setTodoId}
    />
  );
  // const removeTodo = (id) => {
  //   const todoTitle = todos.find((t) => t.id === id);
  
  //   Alert.alert(
  //     "Deleting of todo",
  //     `Do you want to delete ${todoTitle.title}`,
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel",
  //       },
  //       {
  //         text: "Delete",
  //         onPress: () => {
  //           setTodoId(null);
  //           setTodos((prev) => prev.filter((todo) => todo.id !== id));
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // };

  // const updateTodo = (id, title) => {
  //   setTodos((old) =>
  //     old.map((todo) => {
  //       if (todo.id === id) {
  //         todo.title = title;
  //       }
  //       return todo;
  //     })
  //   );
  // };

  if (todoId) {
    const selectedId = todos.find((todo) => todo.id === todoId);
    context = (
      <TodoScreen
        onSav={updateTodo}
        backToApp={() => {
          setTodoId(null);
        }}
        todo={selectedId}
        onRemove={removeTodo}
      />
    );
  }
  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>{context}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
