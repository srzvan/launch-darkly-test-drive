import Head from "next/head";
import { Button, Container } from "@mui/material";
import { useFlags } from "launchdarkly-react-client-sdk";

import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";

import useTodos from "hooks/useTodods";

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
