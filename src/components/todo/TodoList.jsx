import styled from "@emotion/styled";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ title, todos }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div``;

export default TodoList;
