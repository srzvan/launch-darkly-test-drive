import * as React from "react";

const actions = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  CHECK_TODO: "CHECK_TODO",
  UNCHECK_TODO: "UNCHECK_TODO",
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
    case actions.CHECK_TODO:
    case actions.UNCHECK_TODO: {
      const id = action.payload.id;
      const index = state.findIndex(todo => todo.id === id);
      const isCheckAction = action.type === actions.CHECK_TODO;

      return [
        ...state.slice(0, index),
        { ...state[index], isChecked: isCheckAction ? true : false },
        ...state.slice(index + 1),
      ];
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
      checkTodo: id => dispatch({ type: actions.CHECK_TODO, payload: { id } }),
      uncheckTodo: id => dispatch({ type: actions.UNCHECK_TODO, payload: { id } }),
      clearTodos: () => dispatch({ type: actions.CLEAR_TODOS }),
    }),
    []
  );

  return [todos, handlers];
}
