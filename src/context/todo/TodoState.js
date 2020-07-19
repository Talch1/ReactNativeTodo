import React, { useReducer, useContext } from "react";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  SHOW_LOADIND,
  HIDE_LOADIND,
  CLEAR_ERROR,
  SHOW_ERROR,
} from "../types";
import { ScreenContext } from "../screen/screenContext";
import { Alert } from "react-native";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async title =>{
  const response = await fetch("https://reactnativetodoapp-a002e.firebaseio.com/todos.json", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    })
  ;
  const data = await response.json()

  console.log('Data :',data);
  dispatch({ type: ADD_TODO, title ,id:data.name});
  }
  const shoewLoader = () => dispatch({ type: SHOW_LOADIND });
  const hideLoader = () => dispatch({ type: HIDE_LOADIND });
  const clearError = () => dispatch({ type: CLEAR_ERROR });
  const showError = (error) => dispatch({ type: SHOW_ERROR, error });

  const removeTodo = (id) => {
    changeScreen(null);

    const todo = state.todos.find((t) => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id });
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

  const feachData = async () => {
   const response = await fetch(
     'https://reactnativetodoapp-a002e.firebaseio.com/todos.json',
    {
    method:'Get',
  headers:{'Context-Type':'aplication/json'}
}
    )
    const data = await response.json()
    console.log("data ", data);
  };

  return (
    <TodoContext.Provider
      value={{
        feachData,
        error:state.error,
        loading:state.loading,
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
