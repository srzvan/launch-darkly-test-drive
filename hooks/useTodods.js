import * as React from "react";

const actions = {
  ADD: "ADD",
  CHECK: "CHECK",
  DELETE: "DELETE",
  UNCHECK: "UNCHECK",
  CLEAR_ALL: "CLEAR_ALL",
};

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case actions.ADD:
      return [...state, action.payload];
    case actions.DELETE: {
      const id = action.payload.id;
      const index = state.findIndex(todo => todo.id === id);

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case actions.CHECK:
    case actions.UNCHECK: {
      const id = action.payload.id;
      const index = state.findIndex(todo => todo.id === id);
      const isCheckAction = action.type === actions.CHECK;

      return [
        ...state.slice(0, index),
        { ...state[index], isChecked: isCheckAction ? true : false },
        ...state.slice(index + 1),
      ];
    }
    case actions.CLEAR_ALL:
      return initialState;
    default:
      throw new Error(`🚨 Action type ${action} is not defined`);
  }
}

export default function useTodos() {
  const [todos, dispatch] = React.useReducer(reducer, initialState);

  const handlers = React.useMemo(
    () => ({
      addTodo: todo => dispatch({ type: actions.ADD, payload: todo }),
      deleteTodo: id => dispatch({ type: actions.DELETE, payload: { id } }),
      checkTodo: id => dispatch({ type: actions.CHECK, payload: { id } }),
      uncheckTodo: id => dispatch({ type: actions.UNCHECK, payload: { id } }),
      clearTodos: () => dispatch({ type: actions.CLEAR_ALL }),
    }),
    []
  );

  return [todos, handlers];
}
