import React from "react";
import { useQuery } from "react-query";
import { fetchTodos } from "./ApiLayer";

const App = () => {
  const { data: todos, isLoading, error } = useQuery("todos", fetchTodos);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
