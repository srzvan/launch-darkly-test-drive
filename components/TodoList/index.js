import { List } from "@mui/material";

import TodoItem from "components/TodoItem";

export default function TodoList({ todos, handlers }) {
  return (
    todos.length >= 1 && (
      <List>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} handlers={handlers} />
        ))}
      </List>
    )
  );
}
