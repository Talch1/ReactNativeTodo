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
  FETCH_TODOS,
} from "../types";
import { ScreenContext } from "../screen/screenContext";
import { Alert } from "react-native";
import { Http } from "../../http";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async (title) => {
    clearError()
    try {
    const data =  await Http.post( 
      "https://reactnativetodoapp-a002e.firebaseio.com/todos.json",
      {title}
      )
    dispatch({ type: ADD_TODO, title, id: data.name })
  }catch (e) {
    showError('Somsing wrong')
  }
}
  const shoewLoader = () => dispatch({ type: SHOW_LOADIND });
  const hideLoader = () => dispatch({ type: HIDE_LOADIND });
  const clearError = () => dispatch({ type: CLEAR_ERROR });
  const showError = (error) => dispatch({ type: SHOW_ERROR, error });

  const removeTodo = (id) => {
    changeScreen(null);

    const todo = state.todos.find((t) => t.id === id);
    Alert.alert(
      "Delete Todo",
      `Do you shore?"${todo.title}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            changeScreen(null);
            const response = 
            await Http.delete(`https://reactnativetodoapp-a002e.firebaseio.com/todos/${id}.json`);
            dispatch({ type: REMOVE_TODO, id });
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = async (id, title) => {
    clearError();
    try {
      await Http.patch(`https://reactnativetodoapp-a002e.firebaseio.com/todos/${id}.json`
      ,{title})
      dispatch({ type: UPDATE_TODO, id, title });
    } catch (e) {
      showError("somsing wrong");
      console.log(e);
    }
  };

  const fetchData = async () => {
    shoewLoader();
    clearError();
    try {
      const data = await Http.get(
        "https://reactnativetodoapp-a002e.firebaseio.com/todos.json"
      );

      const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }));
      dispatch({ type: FETCH_TODOS, todos })
    } catch (e) {
      showError("somsing wrong");
      console.log(e);
    } finally {
        hideLoader();
    }
  };
  return (
    <TodoContext.Provider
      value={{
        fetchData,
        error: state.error,
        loading: state.loading,
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
