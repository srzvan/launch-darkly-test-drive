import * as React from "react";

const actions = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  CLEAR_TODOS: "CLEAR_TODOS",
};

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, action.payload];
    case actions.DELETE_TODO: {
      const id = action.payload.id;
      const index = state.findIndex(todo => todo.id === id);

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case actions.COMPLETE_TODO: {
      const id = action.payload.id;
      const index = state.findIndex(todo => todo.id === id);

      return [...state.slice(0, index), { ...state[index], isCompleted: true }, ...state.slice(index + 1)];
    }
    case actions.CLEAR_TODOS:
      return initialState;
    default:
      throw new Error(`🚨 Action type ${action} is not defined`);
  }
}

export default function useTodos() {
  const [todos, dispatch] = React.useReducer(reducer, initialState);

  const handlers = React.useMemo(
    () => ({
      addTodo: todo => dispatch({ type: actions.ADD_TODO, payload: todo }),
      deleteTodo: id => dispatch({ type: actions.DELETE_TODO, payload: { id } }),
      completeTodo: id => dispatch({ type: actions.COMPLETE_TODO, payload: { id } }),
      clearTodos: () => dispatch({ type: actions.CLEAR_TODOS }),
    }),
    []
  );

  return [todos, handlers];
}