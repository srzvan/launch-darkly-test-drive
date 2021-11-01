import Head from "next/head";
import { Chip, Typography, Button, Container } from "@mui/material";
import { useFlags } from "launchdarkly-react-client-sdk";

import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";

import useTodos from "hooks/useTodods";
import { Box } from "@mui/system";

export default function Index() {
  const flags = useFlags();
  const [todos, handlers] = useTodos();

  return (
    <>
      <Head>
        <title>LaunchDarkly test-drive 🏎</title>
        <meta name="description" content="LaunchDarkly test-drive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: "flex", gap: "0.5em", justifyContent: "center", mb: 3 }}>
        <Typography variant="h5">Features</Typography>
        {Object.entries(flags).map(([key, value]) => (
          <Chip key={key} label={key} color={value ? "success" : "error"} sx={{ fontWeight: "bold" }} />
        ))}
      </Box>

      <Container maxWidth="md">
        <AddTodo addTodo={handlers.addTodo} />
        {flags.clearTodos && todos.length >= 2 && (
          <Button variant="outlined" color="error" onClick={handlers.clearTodos}>
            Clear all todos
          </Button>
        )}
        <TodoList todos={todos} handlers={handlers} />
      </Container>
    </>
  );
}
