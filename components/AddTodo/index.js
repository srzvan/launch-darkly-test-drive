import * as React from "react";
import { TextField, Button, Icon } from "@mui/material";

export default function AddTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    addTodo({
      id: Date.now(),
      text: value,
      isChecked: false,
    });

    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginBottom: "1rem" }}>
      <TextField multiline fullWidth id="add-todo" label="Todo text" value={value} onChange={handleChange} />
      <Button variant="outlined" type="submit" endIcon={<Icon>add</Icon>} sx={{ marginTop: ".75rem" }}>
        Create todo
      </Button>
    </form>
  );
}
