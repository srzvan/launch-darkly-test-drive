import * as React from "react";
import { TextField, Button, Icon, Grid } from "@mui/material";

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
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" gap=".5rem" direction="column">
        <Grid item xs>
          <TextField
            multiline
            fullWidth
            id="add-todo"
            label="Add todo"
            value={value}
            onChange={handleChange}
            InputProps={{ startAdornment: <Icon>description</Icon> }}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" type="submit">
            Add <Icon>add</Icon>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
