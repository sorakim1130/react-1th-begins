import styled from "@emotion/styled";
import TodoList from "./TodoList.jsx";
import TodoItem from "./TodoItem.jsx";
import TodoForm from "./TodoForm.jsx";
import { useState } from "react";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할일 1",
      content: "할일 내용 1",
      isDone: false,
    },
    {
      id: 2,
      title: "할일 2",
      content: "할일 내용 2",
      isDone: true,
    },
  ]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <Container>
      <h1>Todo List</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList title="Working" todos={workingTodos} />
      <TodoList title="Done" todos={doneTodos} />
    </Container>
  );
};

const Container = styled.div``;

export default TodoContainer;
