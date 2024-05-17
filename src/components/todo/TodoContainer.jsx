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
      content: "할일 내용",
      isDone: false,
    },
  ]);
  console.log("@@ todos", todos);
  return (
    <Container>
      <TodoForm setTodos={setTodos} />
      <div>
        <TodoList></TodoList>
        <TodoItem />
      </div>
    </Container>
  );
};

const Container = styled.div``;

export default TodoContainer;
