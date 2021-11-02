import { useFlags } from "launchdarkly-react-client-sdk";
import { Icon, IconButton, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function TodoItem({ todo, handlers }) {
  const { checkTodo, uncheckTodo, deleteTodo } = handlers;

  const flags = useFlags();

  return (
    <ListItem style={{ alignItems: "flex-start" }}>
      <ListItemIcon>{todo.isChecked && <Icon>check</Icon>}</ListItemIcon>
      <ListItemText style={{ textDecoration: todo.isChecked ? "line-through" : null }} primary={todo.text} />
      {flags.checkTodo && (
        <IconButton onClick={() => (todo.isChecked ? uncheckTodo(todo.id) : checkTodo(todo.id))}>
          <Icon color={todo.isChecked ? "info" : "success"}>{todo.isChecked ? "undo" : "task_alt"}</Icon>
        </IconButton>
      )}
      {flags.deleteTodo && (
        <IconButton onClick={() => deleteTodo(todo.id)}>
          <Icon color="error">delete</Icon>
        </IconButton>
      )}
    </ListItem>
  );
}
