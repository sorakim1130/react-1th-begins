import styled from "@emotion/styled";

const TodoItem = ({ todo }) => {
  return (
    <Container>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>

      <div>
        <button>완료</button>
        <button>삭제</button>
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
