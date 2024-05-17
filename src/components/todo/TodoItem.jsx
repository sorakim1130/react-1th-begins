import styled from "@emotion/styled";

const TodoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;
  const deleteTodo = () => {
    // id가 맞는건 삭제하고 아닌건 그대로 두는 것
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  return (
    <Container>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>

      <div>
        <button onClick={toggleTodo}>{isDone ? "취소" : "완료"}</button>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
`;

export default TodoItem;
