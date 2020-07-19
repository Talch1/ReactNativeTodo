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

const handlers = {
  [ADD_TODO]: (state,{ title,id} ) => ({
    ...state,
    todos: [
      ...state.todos,
      {id,title},
    ],
  }),
  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }),
  [UPDATE_TODO]: (state, { title, id }) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    }),
  }),
  [SHOW_LOADIND]: (state) => ({ ...state, loading: true }),
  [HIDE_LOADIND]: (state) => ({ ...state, loading: false }),
  [CLEAR_ERROR]: (state) => ({ ...state, error: null }),
  [SHOW_ERROR]: (state, {error}) => ({ ...state, error }),
  [FETCH_TODOS]:(state,{todod}) =>({...state,todos}),

  DEFAULT: (state) => state,
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
